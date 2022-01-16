
Vue.component("mostrar-lista", {
    data:function(){
        return {
            local:[],
            sin_datos: "",
            verdadero:true,
            item:"",
            rta:false
        }
    },
    
    
    template: 
    `
    <section class="container">
    <h1 class="text-center">Administrar Productos</h1>
    <table class="table">
        <thead class="bg-dark text-light">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Descr-img</th>
                <th>Precio</th>
                <th>Borrar</th>
            </tr>
        </thead>
        
        <tbody>
            <tr class="border">
                <td>X</td>
                <td class="font-weight-bold">byron</td>
                <td>una vela</td>
                <td><img src="img/Byron.jpg" alt="vela de soja en vaso de vidrio" class="table-img" /></td>
                <td>vela de soja en vaso de vidrio</td>
                <td>$ 1000</td>
                <td><button @click="" class="btn bg-danger text-light">X</button></td>
            </tr>
            <tr class="border">
                <td>X</td>
                <td class="font-weight-bold">Hologram</td>
                <td>una vela</td>
                <td><img src="img/Hologram.jpg" alt="vela de soja en vaso de vidrio" class="table-img" /></td>
                <td>vela de soja en vaso de vidrio</td>
                <td>$ 1500</td>
                <td><button @click="" class="btn bg-danger text-light">X</button></td>
            </tr>
            <tr class="border">
                <td>X</td>
                <td class="font-weight-bold">Aura</td>
                <td>una vela</td>
                <td><img src="img/Aura.jpg" alt="vela de soja en vaso de vidrio" class="table-img" /></td>
                <td>vela de soja en vaso de vidrio</td>
                <td>$ 1800</td>
                <td><button @click="" class="btn bg-danger text-light">X</button></td>
            </tr>
            <tr  v-for="(item, id) in local" class="border">
                <td>{{id}}</td>
                <td class="font-weight-bold">{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
                <td><img :src="item.imagen" :alt="item.descrImg" class="table-img" /></td>
                <td>{{item.descrImg}}</td>
                <td v-if="item.precio > 2500" :class="{rojo:verdadero}">$ {{item.precio}}</td>
                <td v-if="item.precio < 2500">$ {{item.precio}}</td>
                <td><button @click="borrar(item)" class="btn bg-danger text-light">X</button></td>
            </tr>
        </tbody>
    </table>   
    </section>            
    `,
    mounted:function(){
        this.ver_local();
    },
    methods:{
        ver_local:function(){
            if(localStorage.dato){
            
            var dame=JSON.parse(localStorage.getItem("dato"))	
                    this.local = dame
            } else{ this.sin_datos = "No hay datos que mostrar"
            }
            console.log(localStorage.dato)
            console.log(dame)
            console.log(this.local)
            //console.log( this.$route)
        },
        borrar:function(item){
            local= JSON.parse(localStorage.getItem ("dato"))
            for (var i=0; i < local.length; i++){
        
                if (local[i].nombre == item.nombre ) {
                        var rta=confirm("Queres borrar " + local[i].nombre)
                            if (rta==true){
                                this.mensaje = true
                                local.splice(i, 1);
                            } 
                }
            }
            localStorage.setItem("dato", JSON.stringify(local))
            this.ver_local();
        }
    },
})