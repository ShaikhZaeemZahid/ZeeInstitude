$(document).ready(function () {
  // *Navbar Starts
  let menuSideNav = $(".menuSideNav");
  let closeSideNav = $(".closeSideNav");
  let SideNav = $(".SideNav");
  menuSideNav.on("click", function () {
    SideNav.addClass("ShowSideNav").removeClass("HideSideNav");
    menuSideNav.addClass("hidden").removeClass("flex");
    closeSideNav.addClass("flex").removeClass("hidden");
  });
  closeSideNav.on("click", function () {
    SideNav.addClass("HideSideNav").removeClass("ShowSideNav");
    menuSideNav.addClass("flex").removeClass("hidden");
    closeSideNav.addClass("hidden").removeClass("flex");
  });
  // *Navbar Ends


});


    // Add event listener to the button
    document.getElementById('copyEmailButton').addEventListener('click', () => {
      const email = 'educationinncenter@gmail.com';

      // Copy email to clipboard
      navigator.clipboard.writeText(email)
        .then(() => {
          alert('Email copied to clipboard: ' + email);
        })
        .catch(err => {
          console.error('Error copying email: ', err);
        });
    });