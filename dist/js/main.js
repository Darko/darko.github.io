$(".menu-wrap").click(function(e){$(document).find(".menu-items").toggleClass("show-menu"),$("#menu").toggleClass("menu-reverse")}),$(".menu-items li a").on("click",function(e){$(".menu-items").removeClass("show-menu"),$("#menu").removeClass("menu-reverse")}),$('a[href^="#"]').on("click",function(e){var t=$($(this).attr("href"));t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},500))}),$(document).on("scroll",function(e){$(document).scrollTop()>250?$(".fixed-nav").addClass("isFixed"):$(".fixed-nav").removeClass("isFixed")}),$(".contact-form .input-container input, .contact-form .input-container textarea").on("change",function(){var e=$(this);0!==e.val().length?$(this).next("label").addClass("has-data"):$(this).next("label").removeClass("has-data")}),$(".btn-send").on("click",function(){var e={fname:$("#fname").val(),lname:$("#lname").val(),email:$("#email").val(),website:$("#website").val(),message:$("#message").val()};e.fname.length>0&&e.email.length>0&&e.message.length>0?$.ajax({url:"//formspree.io/espadomkd@gmail.com",method:"POST",data:{"First name":e.fname,"Last name":e.lname,Email:e.email,Website:e.website,Message:e.message},dataType:"json"}).done(function(e){$(".then").html("Message sent successfully.").addClass("success"),setTimeout(function(){$(".then").removeClass("success")},3e3),setTimeout(function(){$(".contact-form").addClass("form-hide"),$(".thank-you-view").addClass("show-thank-you")},1e3)}).fail(function(e){$(".then").html("Something went wrong. Please try again.").addClass("error"),setTimeout(function(){$(".then").removeClass("error")},3e3)}):($(".then").html("Fill in the required fields.").addClass("error"),setTimeout(function(){$(".then").removeClass("error")},3e3))}),$(document).ready(function(){var e=$(window).width(),t=".mobile-texts";e>=320&&599>=e&&($(".mobile-texts--show").click(function(){$(t).toggleClass("show-mobile-texts"),$(t).hasClass("show-mobile-texts")?$(".mobile-texts--show").html("Touch to hide this bunch of text"):$(".mobile-texts--show").html("Touch to read more")}),$(".work-item").on("touchstart",function(e){$(".work-item").removeClass("hover"),$(this).toggleClass("hover")}))});