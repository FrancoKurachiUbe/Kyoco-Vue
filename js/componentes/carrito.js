Vue.component("carrito"), {
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
    <section id="section-2">
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
                        <th>Btn</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="items">
                    
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
    `
}