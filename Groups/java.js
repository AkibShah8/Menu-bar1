const header = document.queryselector("header");

window.addEventListener("scroll", Function(){
  header.classlist.toggle("sticky", this.Window.scrolly > 0);
})