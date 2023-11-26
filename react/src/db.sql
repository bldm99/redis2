TABLES: ZTECEMP232017.

DATA: wa_ztecemp232017 TYPE ZTECEMP232017,
      lt_ztecemp232017 TYPE TABLE OF ZTECEMP232017.

PARAMETERS: p_cli TYPE ZTECEMP232017-CLIENT,
            p_dni TYPE ZTECEMP232017-DNI,
            p_nom TYPE ZTECEMP232017-NOMBRE,
            p_pape TYPE ZTECEMP232017-APELLIDO_PATERNO,
            p_sape TYPE ZTECEMP232017-APELLIDO_MATERNO.

* Selección de registros
SELECT * FROM ZTECEMP232017 INTO TABLE lt_ztecemp232017 WHERE DNI = p_dni.

LOOP AT lt_ztecemp232017 INTO wa_ztecemp232017.
  WRITE: / 'Cliente:', wa_ztecemp232017-CLIENT,
         / 'DNI:', wa_ztecemp232017-DNI,
         / 'Nombre:', wa_ztecemp232017-NOMBRE,
         / 'Primer Apellido:', wa_ztecemp232017-APELLIDO_PATERNO,
         / 'Segundo Apellido:', wa_ztecemp232017-APELLIDO_MATERNO.
ENDLOOP.

* Inserción de un nuevo registro
CLEAR wa_ztecemp232017.
wa_ztecemp232017-CLIENT = p_cli.
wa_ztecemp232017-DNI = p_dni.
wa_ztecemp232017-NOMBRE = p_nom.
wa_ztecemp232017-APELLIDO_PATERNO = p_pape.
wa_ztecemp232017-APELLIDO_MATERNO = p_sape.

INSERT INTO ZTEC04808 VALUES wa_ztecemp232017.

* Modificación de un registro existente
CLEAR wa_ztecemp232017.
wa_ztecemp232017-CLIENT = p_cli.
wa_ztecemp232017-DNI = p_dni.
wa_ztecemp232017-NOMBRE = p_nom.
wa_ztecemp232017-APELLIDO_PATERNO = p_pape.
wa_ztecemp232017-APELLIDO_MATERNO = p_sape.

MODIFY ZTECEMP232017 FROM wa_ztecemp232017.

* Eliminación de un registro
DELETE FROM ZTECEMP232017 WHERE DNI = p_dni.
