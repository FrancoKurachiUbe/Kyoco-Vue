Vue.component('form-productos', {
	data:function(){
		return {
            dato:{
                nombre:null, 
                descripcion:null,
                imagen:null, 
                precio:null,
                descrImg:null,
                
            },
            arr:[],
            errNom:[],
            errDes:[],
            errImg:[],
            errPrecio:[],
            errDesImg:[],
            enviar:false,
            
        }
    },

	template:
    `
    <section class="container border my-5 row mx-auto">
    <h1 class="col-12 mx-auto text-center ">Cargar Productos</h1>
      <form class="col-sm-11 col-md-10 col-lg-8 mx-auto pb-4" >

            <div  class="form-group">
                <label for="producto">Nombre del Producto</label>
                <input type="text" v-model="dato.nombre" class="form-control" id="producto" placeholder="Ej: Hologram">
                <ul v-for="item in errNom">
                    <li class="text-danger">{{item}}</li>
                </ul>
            </div>
            <div class="form-group ">
                    <label for="detalle">Descripcion</label>
                    <input type="text" v-model="dato.descripcion" class="form-control" id="datalle" placeholder="Ej: Vela aromatizada a base de soja...">
                <ul v-for="X in errDes">
                    <li class="text-danger">{{X}}</li>
                </ul>
            </div>
            <div class="row">    
                    <div class="form-group col-6">
                        <label for="Imagen">Imagen</label>
                        <select v-model="dato.imagen" class="form-control" id="imagen">
                        <option value="img/Aura.jpg">Aura</option>
                        <option value="img/BlancaBotanica.jpg">BlancaBotanica</option>
                        <option value="img/Byron.jpg">Byron</option>
                        <option value="img/Hologram.jpg">Hologram</option>
                        <option value="img/NightSmoke.jpg">NightSmoke</option>
                        <option value="img/StarsWills.jpg">StarsWills</option>
                        </select>
                        <ul v-for="item in errImg">
                            <li class="text-danger">{{item}}</li>
                        </ul>
                    </div>
                    <div class="form-group col-3 mx-auto">
                        <label for="precio">Precio</label>
                        <input type="text" v-model="dato.precio" class="form-control" id="precio" placeholder="Ej: $500">

                        <ul v-for="item in errPrecio">
                            <li class="text-danger">{{item}}</li>
                        </ul>
                    </div>
            </div>
            <div class="form-group">
                        <label for="descripcion-img">Descripcion de la imagen</label>
                        <input type="text" v-model="dato.descrImg" class="form-control" id="descripcion-img" placeholder="Ej: Vela aromatizada en recipiente de vidrio">
                    <ul v-for="item in errDesImg">
                        <li class="text-danger">{{item}}</li>
                    </ul>
            </div>
    
            <div class="row mt-4">
              <button @click="guardar(dato)"  class="btn btn-success col-6 mx-auto btn-lg" id="sendButton" type="button">Enviar</button>
            </div>
      </form>
        <div class="pt-2 bg-success border mt-4 col-sm-11 col-md-10 col-lg-8 mx-auto" v-if="enviar === true">
            <p class="text-center  text-light h3">Exito</p>
        </div>
    </section>
    `,
    methods:{
        guardar:function(dato){

            if (dato.nombre == null){
                this.errNom.push('El nombre es obligatorio.');
                console.log('error nombre', this.errNom);
            }
            if(dato.nombre && dato.nombre.length < 3){
                this.errNom.push('Debe ser mayor de tres caracteres');
                console.log('error nombre',this.errNom);
            }

            if (dato.descripcion == null){
                this.errDes.push('La descripcion es obligatoria.');   
            }
            if(dato.descripcion && dato.descripcion.length < 5){
                this.errDes.push('Debe ser mayor de 5 caracteres');
                console.log('error descripcion',this.errDes);
            }
            if (dato.imagen == null){
                this.errImg.push('La imagen es obligatoria.');
                
            }
            if (dato.precio == null){
                this.errPrecio.push('El precio es obligatorio.');
            }
            if (dato.descrImg == null){
                this.errDesImg.push('La descripcion de la imagen es obligatoria.');
            }
            if(dato.descrImg && dato.descrImg.length < 5){
                this.errDesImg.push('Debe ser mayor de 5 caracteres');
                console.log('error descripcion de la imagen',this.errDesImg);
            }
            
            if(this.errNom.length == 0 && this.errDesImg == 0 && this.errImg == 0 && this.errDes == 0 && this.errPrecio == 0){
                this.enviar = true;

                if(!localStorage.dato){
                    arr=[]
                }else{
                    arr=JSON.parse(localStorage.getItem("dato"))
                }
                arr.push(dato)
                localStorage.setItem("dato",JSON.stringify(arr))
            }
        }
    },
});

