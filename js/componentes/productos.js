
Vue.component("productos", {
    data:function(){
        return {
            local:[],
            sin_datos: "",
        }
    },
    template: 
`

<section>
<h1>Velas</h1>
    <article class="cards">
                <div class="cards-detalle">
                    <h2>Hologram</h2>
                    <p>$<span>1950</span></p>
                    <button class="butt agregar">Agregar</button>
                    <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
                </div>    
                <picture class="cards-img">
                    <source media="(max-width:768px)" srcset="img/detalle_Hologram.jpg">
                    <img src="img/producto/Hologram.jpg" alt="">
                </picture>
    </article>
    <article class="cards">
        <div class="cards-detalle">
            <h2>Aura</h2>
            <p>$<span>3200</span></p>
            <button class="butt agregar">Agregar</button>
            <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
        </div>
        
        <picture class="cards-img">
            <source media="(max-width:768px)" srcset="img/detalle_Aura.jpg">
            <img src="img/producto/Aura.jpg" alt="">
        </picture>
    </article>
    <article class="cards">
        <div class="cards-detalle">
            <h2>Blanca Botanica</h2>
            <p>$<span>2300</span></p>
            <button class="butt agregar">Agregar</button>
            <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
        </div>

        <picture class="cards-img">
            <source media="(max-width:768px)" srcset="img/detalle_BlancaBotanica.jpg">
            <img src="img/producto/BlancaBotanica.jpg" alt="">
        </picture>
    </article>
    <article class="cards">
        <div class="cards-detalle">
            <h2>Byron</h2>
            <p>$<span>1600</span></p>
            <button class="butt agregar">Agregar</button>
            <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
        </div>

        <picture class="cards-img">
            <source media="(max-width:768px)" srcset="img/detalle_Byron.jpg">
            <img src="img/producto/Byron.jpg" alt="">
        </picture>
    </article>
    <article class="cards">
        <div class="cards-detalle">
            <h2>Night Smoke</h2>
            <p>$<span>1800</span></p>
            <button class="butt agregar">Agregar</button>
            <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
        </div>

        <picture class="cards-img">
            <source media="(max-width:768px)" srcset="img/detalle_NightSmoke.jpg">
            <img src="img/producto/NightSmoke.jpg" alt="">
        </picture>
    </article>
    <article class="cards">
        <div class="cards-detalle">
            <h2>Stars Wills</h2>
            <p>$<span>1800</span></p>
            <button class="butt agregar">Agregar</button>
            <a href="productoAmpliado.html" class="btn butt ampliar ampliar2" >Ampliar</a>
        </div>

        <picture class="cards-img">
            <source media="(max-width:768px)" srcset="img/detalle_StarsWills.jpg">
            <img src="img/producto/StarsWills.jpg" alt="">
        </picture>
    </article>
    <article  v-for="item in local" class="cards">
                <div class="cards-detalle">
                    <h2>{{item.nombre}}</h2>
                    <p>$ {{item.precio}}</p>
                    <button class="butt agregar">Agregar</button>
                    <a href="" class="btn butt ampliar ampliar2" >Ampliar</a>
                </div>
                <picture>
                        <img :src="item.imagen" :alt="item.descrImg"/>
                </picture>
        </article>
</section>
           
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
            }
    }
})