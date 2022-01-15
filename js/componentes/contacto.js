Vue.component('contacto', {
	data:function(){
		return {
            /* dato:{
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
            enviar:false, */
            /* titulo1:"Sobre Kyoco",
            titulo2:"Nuestros Productos",
            titulo3:"REUTILIZÁ",
            subtitulo3:"Tips para una limpieza perfecta:", */
            
        }
    },

	template:
    `
    <secti
    on class="container border my-5 row mx-auto">
    <h1>Contacto</h1>
    <div class="container contacto">
            <form>
                <div class="form-group" class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="mb-3 form-control" id="nombre" placeholder="Nombre...">
                </div>
                <div class="form-group" class="mb-3">
                    <label for="mail" class="form-label">Email</label>
                    <input type="email" class="mb-3 form-control" id="mail" aria-describedby="ayudamail" placeholder="email...">
                </div>
                <div class="form-group" class="">
                    <label for="comentario" class="form-label">Dejanos tu Consulta</label>
                    <textarea id="comentario" class="mb-3 form-control" cols="30" rows="5"></textarea>
                </div>
                <input type="submit" value="Enviar" class="btn btn-success btn-lg">
            </form>
    </div>
    </section>
    `
})