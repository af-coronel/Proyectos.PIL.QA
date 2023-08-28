class Utils {
/**
 * @metod getCompleDate
 * @returns {Array} [día, mes, año] - Ejemplo [17, "Agosto", 2023]
 */

   getCompleteDate = () => {
     
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();

    const nombresMeses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    return [diaActual, nombresMeses[mesActual], anioActual];

  };

};

export default new Utils;