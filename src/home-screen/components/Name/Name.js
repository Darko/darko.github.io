import { Title } from '../../../components/Text/Text';

const Name = Title.extend`
  color: ${props => props.theme.colors.title};
  grid-area: title;
  margin-bottom: 8px;

  span {
    display: block;
  }
`;

export default Name;
