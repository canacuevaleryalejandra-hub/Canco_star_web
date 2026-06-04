{/* 
  ==========================================
  FOOTER - PIE DE PAGINA EDITABLE
  ==========================================
  
  INSTRUCCIONES PARA EDITAR:
  
  1. INFORMACION DE LA EMPRESA:
     - Cambia el texto dentro de <p> en la primera columna
  
  2. ENLACES RAPIDOS:
     - Agrega o quita <li><a href="#">Texto</a></li>
     - Cambia el # por la URL real
  
  3. CONTACTO:
     - Actualiza email, telefono y direccion
  
  4. REDES SOCIALES:
     - Cambia los href="#" por tus enlaces reales
     - Ejemplo: href="https://facebook.com/tuempresa"
  
  5. COPYRIGHT:
     - Actualiza el anio y nombre de empresa
*/}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* COLUMNA 1: Informacion de la empresa */}
        <div className="footer-column">
          <h3>CANCO STAR</h3>
          <p>
            Somos una empresa cafetera Aceveduna, nacida en el seno de la 
            familia Canacue-Collazos. Producimos cafe de especialidad con 
            amor y tradicion desde las montanas del Huila.
          </p>
          
          {/* Redes Sociales - cambia los # por tus enlaces */}
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="Instagram">IG</a>
            <a href="#" className="social-link" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        {/* COLUMNA 2: Enlaces rapidos */}
        <div className="footer-column">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#historia">Nuestra Historia</a></li>
            <li><a href="#procesos">Procesos</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        {/* COLUMNA 3: Contacto */}
        <div className="footer-column">
          <h3>Contacto</h3>
          <ul>
            <li><a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a></li>
            <li><a href="tel:+573001234567">+57 300 123 4567</a></li>
            <li><a href="#">Acevedo, Huila - Colombia</a></li>
          </ul>
        </div>

      </div>

      <hr className="footer-divider" />
      
      {/* Copyright - actualiza el anio */}
      <div className="footer-bottom">
        <p>&copy; 2024 CANCO STAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
