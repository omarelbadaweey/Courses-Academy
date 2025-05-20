// start variables
var cardWeb = document.querySelector('.card_web');
var cardApp = document.querySelector('.card_app');
var allProducts = document.querySelectorAll('.parent button');
var content = document.getElementById('content');
var send = document.getElementById('send');
var remove = document.getElementById('remove');
var p_content = document.getElementById('p_content');
var totalPrice = 0;
var showPrice = document.getElementById("showPrice")
var title = document.querySelectorAll(".box h4")
var parent = document.getElementById("parent")
var original = document.getElementById("original")
var drop_1 = document.getElementById("drop_1")
var drop_2 = document.getElementById("drop_2")
var grap_remove_text = document.getElementById("grap_remove_text")
var close_grap = document.getElementById("close_grap")
var productSearch = document.querySelectorAll('.box')
var search = document.getElementById('search');
var sectionTitle = document.querySelectorAll('.sectionTitle')
var notFound = document.getElementById('notFound')
var programming = document.getElementById('programming')
var scrollTopBtn = document.getElementById('scrollTopBtn')
// Event-1 overlay for web section //
cardWeb.addEventListener('click', function (e) {
  let btn = e.target;
  if (btn.classList.contains('details_btn')) {
    const card = btn.closest('.box');
    const overlay = card.querySelector('.overlay_details');
    const details_icon = card.querySelector('.details_icon');
    // pop up menu for overlay //
    if (overlay.classList.contains('hidden')) {
      overlay.classList.remove('hidden');
      overlay.classList.add('flex');
      details_icon.classList.add('fa-chevron-down');
      details_icon.classList.remove('fa-angle-up');
      details_icon.style.color = "red";
    } else {
      overlay.classList.add('hidden');
      details_icon.classList.remove('fa-chevron-down');
      details_icon.classList.add('fa-angle-up');
      details_icon.style.color = "#f59e0b";
    }
  }
});
// Event-2 overlay for app section //
cardApp.addEventListener('click', function (e) {
  let btn = e.target;
  if (btn.classList.contains('details_btn')) {
    const card = btn.closest('.box');
    const overlay = card.querySelector('.overlay_details');
    const details_icon = card.querySelector('.details_icon');
    // pop up menu for overlay //
    if (overlay.classList.contains('h-[0]')) {
      overlay.classList.remove('h-[0]');
      overlay.classList.add('h-[61.5%]');
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-[1');
      overlay.style.marginTop = "4.2rem";
      details_icon.classList.add('fa-chevron-down');
      details_icon.classList.remove('fa-angle-up');
      details_icon.style.color = "red";
    } else {
      overlay.classList.add('h-[0]');
      overlay.classList.remove('h-[61.5%]');
      details_icon.classList.remove('fa-chevron-down');
      details_icon.classList.add('fa-angle-up');
      details_icon.style.color = "#f59e0b";
      overlay.style.marginTop = "-4rem";
    }
  }
});
// Event-3 collection and show price //
allProducts.forEach(function(product){
  product.onclick = function(){
    var title = product.parentElement.querySelector('h4');
    totalPrice += +(product.getAttribute('price'));
    p_content.innerHTML += ` <p class="border-t-2 border-b-2 text-lg sm:text-2xl md:text-3xl border-amber-200 py-2 text-amber-50 bg-teal-600">${title.textContent} <span class="text-amber-500 ">Price: </span> <span class="text-white underline">${product.getAttribute('price')}</span><span class="text-amber-500 ">$</span><p/`;

    if (p_content !== "") {
      send.classList.remove('hidden');
      remove.classList.remove('hidden');
    }
  }

})
// show price //
send.addEventListener("click" , () => {
  if (totalPrice > 1000) {
    Swal.fire({
      title: "You Got Discount 100$ 💵💰🌟",
      text:"Use The Code '967846' ",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    totalPrice -= 100;
    totalPrice = "after Discount: " + totalPrice 
  }
  showPrice.classList.remove("hidden")
  showPrice.innerHTML = "Total Price " + totalPrice +'💰'
});
// remove price //
remove.addEventListener("click" , () =>{
  Swal.fire({
  title: "Are you sure?",
  text: "You Will Delete All Products!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Delete All!"
  }).then((result) => {
    if (result.isConfirmed) {
      showPrice.classList.add("hidden");
      p_content.innerHTML = '';
      send.classList.add('hidden')
      remove.classList.add('hidden');
      totalPrice = 0;
      original.appendChild(drop_1)
      original.appendChild(drop_2)
      close_grap.classList.add('!hidden')
      close_grap.classList.remove('block')
      parent.classList.remove("lg:grid-cols-2")
      grap_remove_text.style.display = "flex";
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }else{
        send.classList.remove('hidden')
        remove.classList.remove('hidden');
    }
  });

})

// Event-4 drag
drop_1.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'drop_1'))
drop_2.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'drop_2'))
parent.addEventListener('dragover' , (e) => e.preventDefault())
parent.addEventListener('drop', (e) => {
  // e.preventDefault()
  var id  = e.dataTransfer.getData('text')
  var element = document.getElementById(id)
  parent.appendChild(element);
  parent.classList.add("lg:grid-cols-2")
  grap_remove_text.style.display = "none";
  close_grap.classList.remove('!hidden')
  close_grap.classList.add('block')
})
close_grap.addEventListener('click' , () =>{
  original.appendChild(drop_1)
  original.appendChild(drop_2)
  close_grap.classList.add('!hidden')
  close_grap.classList.remove('block')
  parent.classList.remove("lg:grid-cols-2")
  grap_remove_text.style.display = "flex";


})
// Event-4 search
search.oninput = function(){
  var searchValue = search.value.toLocaleLowerCase().trim();
  var enyvisable = false;
  productSearch.forEach(function(item){
    if (item.textContent.toLocaleLowerCase().trim().includes(searchValue)) {
      item.style.display = "flex";
      enyvisable = true;
      sectionTitle.forEach(function(item){
        if (item.textContent.toLocaleLowerCase().trim().includes(searchValue)) {
        item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })

    } else {
      item.style.display = "none"
    }
  })
 
  if (!enyvisable) {
      notFound.style.display = "block"
      programming.style.display = "none"
  } else {
      notFound.style.display = "none"
      programming.style.display = "block"
  }
}
// Event-5 scrollTopBtn

window.addEventListener('scroll' , () =>{
  if (window.scrollY > 150) {
    scrollTopBtn.style.display = "block"
  } else {
      scrollTopBtn.style.display = "none"
  }
  scrollTopBtn.addEventListener('click' , () =>{
      window.scroll({top:0 , behavior : "smooth"})
  })
})