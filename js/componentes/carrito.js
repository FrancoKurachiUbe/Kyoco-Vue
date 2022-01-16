/* 
https://es.vuejs.org/v2/cookbook/client-side-storage.html
*/
Vue.component("carrito", {
    data:function(){
		return {
            local:[],
            sin_datos: "",
        }
    },
    template:
    `
    <section>
        <div class="container">
            <h1 class="h1 mt-4">Carrito de Compras</h1>
            <table class="table text-center">
                <thead class="bg-dark text-light">
                    <tr>
                        
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Cantidad</th>
                        
                        <th>Total</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody id="items">
                    <tr  v-for="(item, id) in local" class="border">
                        <td>{{item.precio}}</td>
                        
                    </tr>
                </tbody>
                <tfoot class="borde-BF">
                    <tr id="footer">
                        <th>Carrito Vacio</th>
                    </tr>
                </tfoot>
            </table>
            <button id="productoComprar" class="btn btn-success">Aceptar</button>
        </div> 
    </section>
    `,
    mouted:function(){
        this.verLocal()
    },
    methods:{
        verLocal:function(){
            if(localStorage.item){
                var dame=JSON.parse(localStorage.getItem("item"))
                this.local = dame
                console.log (this.local)
            }else{
                this.sin_datos = "No Hay Datos"
            }
            console.log(localStorage.dato)
            console.log(dame)
            console.log(this.local)
        }
    },
})
/* 
<td><img :src="item.imagen" :alt="item.descrImg" class="table-img" /></td>
<td class="font-weight-bold">{{item.nombre}}</td>
<td>{{item.descripcion}}</td>
<td>cantidad</td>
<td>$ {{item.precio}}</td>
<td><button @click="borrar(item)" class="btn bg-danger text-light">X</button></td>
*/