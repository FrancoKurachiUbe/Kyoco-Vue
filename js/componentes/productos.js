
Vue.component("productos", {
    data:function(){
        return {
            local:[],
            sin_datos: "",
            item:{
                precio:null,
            },
        
        /* arr:[] */
        }
        
    },
    template: 
`
<div>
    <h1 class="pt-4">Velas</h1>
    <section id="cards" class="pt-4">
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Hologram</h2>
                <p>$<span>1950</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>    
            <div class="cards-img">
                <img src="img/producto/Hologram.jpg" alt="">
            </div>
        </article>
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Aura</h2>
                <p>$<span>3200</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div class="cards-img">
                <source media="(max-width:768px)" srcset="img/detalle_Aura.jpg">
                <img src="img/producto/Aura.jpg" alt="">
            </div>
        </article>
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Blanca Botanica</h2>
                <p>$<span>2300</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div class="cards-img">
                <source media="(max-width:768px)" srcset="img/detalle_BlancaBotanica.jpg">
                <img src="img/producto/BlancaBotanica.jpg" alt="">
            </div>
        </article>
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Byron</h2>
                <p>$<span>1600</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div class="cards-img">
                <source media="(max-width:768px)" srcset="img/detalle_Byron.jpg">
                <img src="img/producto/Byron.jpg" alt="">
            </div>
        </article>
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Night Smoke</h2>
                <p>$<span>1800</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div class="cards-img">
                <img src="img/producto/NightSmoke.jpg" alt="">
            </div>
        </article>
        <article class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>Stars Wills</h2>
                <p>$<span>1800</span></p>
                <button class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div class="cards-img">
                <img src="img/producto/StarsWills.jpg" alt="">
            </div>
        </article>
        <article  v-for="item in local" class="cards shadow-lg">
            <div class="cards-detalle">
                <h2>{{item.nombre}}</h2>
                <p>$ {{item.precio}}</p>
                <button v-model="guardar(item)" class="btn btn-primary btn-lg">Agregar</button>
                <button class="btn btn-outline-dark btn-lg">Ampliar</button>
            </div>
            <div>
                    <img :src="item.imagen" :alt="item.descrImg"/>
            </div>
        </article>
    </section>
</div>
           
    `,
     
    mounted:function(){
        //console.log("se monto")
        this.ver_local();
    },
    methods:{
            ver_local:function(){
                if(localStorage.dato){
                var dame=JSON.parse(localStorage.getItem("dato"))	
                        this.local = dame
                        //console.log(this.local)
                } else{
                this.sin_datos = "No hay datos que mostrar"
                }
                //console.log( this.$route)
            },

            //Cuando pulsamos el boton agregar almacenamos la informacion del producto
            guardar:function(item){
                console.log(item)
                //console.log(item.precio)
                console.log(JSON.parse(localStorage.getItem("item")))
                if(!localStorage.item){
                    arr=[]
                }else{
                    arr=JSON.parse(localStorage.getItem("item"))
                }
                arr.push(item)
                console.log(arr)
                localStorage.setItem("item",JSON.stringify(arr))

            }
    }
})