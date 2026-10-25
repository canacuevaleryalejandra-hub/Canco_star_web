-- Agranda la columna "contraseña" de la tabla "usuarios" para que quepan las contraseñas
-- encriptadas (password_hash genera 60 caracteres; 255 deja espacio para algoritmos futuros).
--
-- POR QUÉ: la columna era VARCHAR(40). Desde ahora la API guarda la contraseña encriptada y,
-- sin este cambio, MySQL la cortaría a 40 caracteres o rechazaría el registro.
--
-- CÓMO APLICARLO: en phpMyAdmin, abre la base "canco", pestaña "SQL", pega la línea de abajo
-- y presiona "Continuar". Solo hay que hacerlo una vez.
--
-- OJO: las contraseñas que ya están guardadas siguen sin encriptar. Este cambio no las toca.

ALTER TABLE `usuarios` MODIFY `contraseña` VARCHAR(255) NOT NULL;
