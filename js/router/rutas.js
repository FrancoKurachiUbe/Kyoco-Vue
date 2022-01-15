const home = { template: `<home></home>`, name:"componente1"
};
const productos = {template: `<productos></productos>`, name:"componente2"
};
const contacto = {template: `<contacto></contacto>`, name: "componente3"};
const formulario = {template: `<form-productos> </form-productos>`,name:"componente4"};
const lista = {template: `<mostrar-lista></mostrar-lista>`, name:"componente5",};
const carrito = {template: `<carrito> </carrito>`,name:"componente6"};

const routes = [
  { path: '/', component: home, name:'home', meta: {auth: false, title:'Kyoco | Home'} },
  { path: '/productos', component: productos, name:'productos', meta: {auth:false, title:'Kyoco | Producto'}},
  { path: '/contacto', component: contacto, name: 'contacto', meta: {auth:false, title: 'Kyoco | Contacto'}},
  { path: '/formulario', component: formulario, name: 'formulario', meta: {auth:false, title: 'Kyoco | Cargar Producto'}},
  { path: '/lista', component: lista, name:'lista', meta: {auth: false, title: 'Kyoco | Lista Productos'} },
  { path: '/carrito', component: carrito, name:'carrito', meta: {auth: false, title: 'Kyoco | carrito'} },

];

const router = new VueRouter({
	  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
});


const app = new Vue({
	el:"#contenedor",
  	router

});


