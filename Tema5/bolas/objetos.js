class bola
{
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY) {
        this.x = posicionX;
        this.y = posicionY;  
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;     
    }
    
    mueve(anchoContenedor, altoContenedor)
    {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        this.x += this.vX;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.x-this.radio<=0 || this.x+this.radio >= anchoContenedor )
        {
            this.vX *= -1;
            this.x  = (this.x-this.radio<=0) ? this.radio: anchoContenedor-this.radio;
        }
        
        // Eje Y
        if (this.y-this.radio <=0 || this.y+this.radio >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y-this.radio<=0) ? this.radio: altoContenedor-this.radio;
        }
    }

    // colisiona(otraBola){
    //     let dx = this.x - otraBola.x;
    //     let dy = this.y - otraBola.y;
    //     let distancia = Math.sqrt(dx * dx + dy * dy);

    //     if (distancia < this.radio + otraBola.radio) {
    //         this.vX *=-1;
    //         this.vY *= -1;

    //         this.x = this.posAnteriorX;
    //         this.y = this.posAnteriorY;
    //     }
    // }
    
    

}

class interfazBola{
    constructor(bola, svg){
        // Creación del tag
        this.bola = bola
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttribute("fill", "red");
        this.tagCircle.setAttribute("cx", bola.x);
        this.tagCircle.setAttribute("cy", bola.y);
        this.tagCircle.setAttribute("r", bola.radio);
        svg.appendChild(this.tagCircle);
    
    }
    dibuja()
    {
        this.tagCircle.setAttribute("cx", this.bola.x);
        this.tagCircle.setAttribute("cy", this.bola.y);
    }

}

class barra
{
      constructor(largo, ancho, posicionX, posicionY) {
        this.largo = largo;
        this.ancho = ancho;
        this.x = posicionX;
        this.y = posicionY;
        this.vY = 20;

        
    }

    mueve(altoContenedor)
    {

        this.posAnteriorY = this.y;
        this.y += this.vY;    
        
        // Comprobamos ahora si está fuera de los límites
        
        // Eje Y
        if (this.y <= 0 || this.y + this.largo >= altoContenedor )
        {
            this.vY *= -1;
            this.y  = (this.y - this.largo<=0) ? this.largo: altoContenedor - this.largo;
        }
    }

}

class interfazBarra{
    constructor(barra, svg){
        // Creación del tag
        this.barra = barra
        this.tagRectangle = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tagRectangle.setAttribute("fill", "black");
        this.tagRectangle.setAttribute("x", barra.x);
        this.tagRectangle.setAttribute("y", barra.y);
        this.tagRectangle.setAttribute("width", barra.ancho);
        this.tagRectangle.setAttribute("height", barra.largo);
        svg.appendChild(this.tagRectangle);

    }
    
    dibuja()
    {
        this.tagRectangle.setAttribute("cx", this.barra.x);
        this.tagRectangle.setAttribute("cy", this.barra.y);
    }

}


export {bola, barra, interfazBola, interfazBarra};