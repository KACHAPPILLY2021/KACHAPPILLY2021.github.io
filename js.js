//if (screen.width < 767){
//  window.location.reload();
//}
//function changeViewport() {
//  var screenWidth = window.innerWidth;
//  var mobileMaxWidth = 767; // set your mobile viewport width here
//  if (screenWidth <= mobileMaxWidth) {
//    var viewportMeta = document.querySelector('meta[name="viewport"]');
//    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1');
//    location.reload();
//  }
//}

  
  const elements = document.querySelectorAll('.slide-in');

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        //  if (document.querySelectorAll('.slide-in.show').length === elements.length) {
        //    // Add the 'no-transition' class to the body element
        //    document.body.classList.add('no-transition');
        //  }
      }
      //  else{
      //   entry.target.classList.remove('show');
      //  }
    });
    });
   elements.forEach(element => {
    observer.observe(element);
  });


  const elementss = document.querySelectorAll('.slide-in-r');

  const observers = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('show');
        //  if (document.querySelectorAll('.slide-in-r.show').length === elements.length) {
        //   // Add the 'no-transition' class to the body element
        //   document.body.classList.add('no-transition');
        // }
       }
        // else{
        //  entry.target.classList.remove('show');
        // }
     });
     });
    elementss.forEach(element => {
     observer.observe(element);
   });

   const elementsss = document.querySelectorAll('.slide-in-u');

   const observerss = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (document.querySelectorAll('.slide-in-u.show').length === elements.length) {
            // Add the 'no-transition' class to the body element
            document.body.classList.add('no-transition');
          }
        }
        // else{
        //  entry.target.classList.remove('show');
        // }
      });
      });
     elementsss.forEach(element => {
      observer.observe(element);
    });

    const elementssss = document.querySelectorAll('.slide-in-left');

    const observersss = new IntersectionObserver(entries => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('show');
           if (document.querySelectorAll('.slide-in-left.show').length === elements.length) {
             // Add the 'no-transition' class to the body element
             document.body.classList.add('no-transition');
           }
         }
         // else{
         //  entry.target.classList.remove('show');
         // }
       });
       });
      elementssss.forEach(element => {
       observer.observe(element);
     });

     const elementsssss = document.querySelectorAll('.slide-in-right');

     const observerssss = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (document.querySelectorAll('.slide-in-right.show').length === elements.length) {
              // Add the 'no-transition' class to the body element
              document.body.classList.add('no-transition');
            }
          }
          // else{
          //  entry.target.classList.remove('show');
          // }
        });
        });
       elementsssss.forEach(element => {
        observer.observe(element);
      });

      const elementssssss = document.querySelectorAll('.slide-in-upper');

      const observersssss = new IntersectionObserver(entries => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             entry.target.classList.add('show');
             if (document.querySelectorAll('.slide-in-upper.show').length === elements.length) {
               // Add the 'no-transition' class to the body element
               document.body.classList.add('no-transition');
             }
           }
           // else{
           //  entry.target.classList.remove('show');
           // }
         });
         });
        elementssssss.forEach(element => {
         observer.observe(element);
       });


// const elements = document.querySelectorAll('.slide-in');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//       if (document.querySelectorAll('.slide-in.show').length === elements.length) {
//         // Remove the 'slide-in' class from all elements once all animations are shown
//         elements.forEach(element => {
//           element.classList.remove('slide-in');
//         });
//       }
//     }
//     else{
//       entry.target.classList.remove('show');
//     }
//   });
// });
// elements.forEach(element => {
//   observer.observe(element);
// });

