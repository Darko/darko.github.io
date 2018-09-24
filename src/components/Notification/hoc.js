import React from 'react';
import Context from './Context';

export const HIDE_ANIMATION_DELAY = 400;

const withNotificationService = Wrapped => {
  class NotificationService extends React.Component {
    state = {
      queue: [],
      current: null,
      digesting: false
    }

    getQueue = () => {
      return this.state.queue;
    }

    push = notification => {
      const withDefaults = {
        showTime: 3000,
        ...notification
      };

      this.setState((state) => ({
        queue: [
          ...state.queue,
          withDefaults
        ]
      }));

      this.digest();
    }

    close = () => {
      clearTimeout(this.wait);

      this.setState({
        digesting: false,
      });

      setTimeout(() => this.digest(), HIDE_ANIMATION_DELAY);
    }

    digest = () => {
      const { queue } = this.state;

      if (!queue.length) return;

      if (this.state.digesting) {
        // Already showing shit
        return;
      }
  
      // Show notification
      const [notification, ...rest] = queue;

      this.setState({
        current: notification,
        digesting: true,
        queue: [
          ...rest
        ]
      });
  
      return new Promise(resolve => {
        // only use timeout if time is greater than 0
        if (notification.showTime > 0) {
          this.wait = setTimeout(() => {
            this.close();
            resolve();
          }, notification.showTime);
        }
      });
    }

    render() {
      const provide = {
        getQueue: this.getQueue,
        push: this.push,
        close: this.close,
        ...this.state,
      }
      return (
        <Context.Provider value={provide}>
          <Wrapped />
        </Context.Provider>
      );
    }
  }

  return NotificationService;
}

export default withNotificationService;