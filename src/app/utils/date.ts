
export class MyDate{

  static formatDateShort(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

  static formatDateLong(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  static convertToCustomDate(dateArray: number[] | Date | null | undefined): Date {
    if (dateArray === null || dateArray === undefined) {
      return new Date(2000, 0, 1);
    }
    if (dateArray instanceof Date) {
      return dateArray
    }
    const year = dateArray[0];
    const month = dateArray[1] - 1; // Los meses en JavaScript son base 0 (enero es 0)
    const day = dateArray[2];
    const hours = dateArray[3] || 0;
    const minutes = dateArray[4] || 0;
    const seconds = dateArray[5] || 0;
    const milliseconds = dateArray[6] || 0;
    return new Date(year, month, day, hours, minutes, seconds, milliseconds);
  }

  static converToCustomDateSpecial(dateArray: number[] | Date | null | undefined): string {

    const fecha: Date = MyDate.convertToCustomDate(dateArray);
    const ahora = new Date();
    const diferencia = ahora.getTime() - fecha.getTime();

    // Cálculo de la antigüedad en minutos, horas, días, meses y años
    const minutos = Math.floor(diferencia / (1000 * 60));
    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44)); // Asumiendo un mes de 30.44 días
    const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)); // Asumiendo un año de 365.25 días

    // Elige la unidad de tiempo adecuada y construye la cadena de antigüedad
    if (anos > 1) {
      return `Hace ${anos} años`;
    } else if (anos === 1) {
      return 'Hace 1 año';
    } else if (meses > 1) {
      return `Hace ${meses} meses`;
    } else if (meses === 1) {
      return 'Hace 1 mes';
    } else if (dias > 1) {
      return `Hace ${dias} días`;
    } else if (dias === 1) {
      return 'Ayer';
    } else if (horas > 1) {
      return `Hace ${horas} horas`;
    } else if (horas === 1) {
      return 'Hace 1 hora';
    } else if (minutos > 1) {
      return `Hace ${minutos} minutos`;
    } else {
      return 'Hace un momento';
    }
  }

  static convertToCustomDateShort(dateArray: number[] | Date | null | undefined): Date {
    if (dateArray === null || dateArray === undefined) {
      return new Date(2000, 0, 1);
    }
    if (dateArray instanceof Date) {
      return dateArray
    }
    const year = dateArray[0];
    const month = dateArray[1] - 1; // Los meses en JavaScript son base 0 (enero es 0)
    const day = dateArray[2];

    return new Date(year, month, day);
  }

  static convertToCustomStringShort(dateArray: number[] | Date | null): string {
    if (dateArray === null) {
      return '01/01/2000'; // Fecha por defecto: 1 de enero de 2000
    }

    if (dateArray instanceof Date) {
      return this.formatDateShort(dateArray);
    }

    const year = dateArray[0];
    const month = dateArray[1] - 1; // Los meses en JavaScript son base 0 (enero es 0)
    const day = dateArray[2];

    const customDate = new Date(year, month, day);
    return this.formatDateShort(customDate);
  }

  static convertToCustomStringLong(dateArray: number[] | Date | null): string {
    if (dateArray === null) {
      return '01/01/2000 00:00:00'; // Fecha por defecto: 1 de enero de 2000 a las 00:00:00
    }

    if (dateArray instanceof Date) {
      return this.formatDateLong(dateArray);
    }

    const year = dateArray[0];
    const month = dateArray[1] - 1; // Los meses en JavaScript son base 0 (enero es 0)
    const day = dateArray[2];
    const hour = dateArray[3] || 0;
    const minute = dateArray[4] || 0;
    const second = dateArray[5] || 0;

    const customDate = new Date(year, month, day, hour, minute, second);
    return this.formatDateLong(customDate);
  }

}
