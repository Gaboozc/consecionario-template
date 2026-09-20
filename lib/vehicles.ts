export type Vehicle = {
  id: number;
  marca: string;
  modelo: string;
  año: number;
  tipo: string;
  precio: string;
  precioNumero: number;
  color: string;
  kilometraje: string;
};

const vehicleData = [
  ["Volvo", "XC40 Recharge", 2024, "SUV eléctrico", 895000, "Gris piedra", "12,400 km"],
  ["Mazda", "CX-5 Signature", 2023, "SUV", 548000, "Rojo profundo", "18,200 km"],
  ["BMW", "330i M Sport", 2024, "Sedán", 1080000, "Azul noche", "8,900 km"],
  ["Toyota", "RAV4 Hybrid", 2023, "SUV híbrida", 625000, "Blanco perla", "24,600 km"],
  ["Audi", "A3 Sedan", 2022, "Sedán", 499000, "Negro ónix", "31,200 km"],
  ["Jeep", "Wrangler Sahara", 2024, "Todoterreno", 899000, "Verde oliva", "10,100 km"],
  ["Mercedes-Benz", "GLC 300", 2023, "SUV", 1145000, "Gris grafito", "16,700 km"],
  ["Tesla", "Model 3 Long Range", 2024, "Sedán eléctrico", 799000, "Blanco sólido", "11,800 km"],
  ["Ford", "Bronco Outer Banks", 2023, "Todoterreno", 768000, "Arena", "22,300 km"],
  ["Honda", "CR-V Touring", 2024, "SUV", 689000, "Plata lunar", "9,600 km"],
  ["Porsche", "Macan S", 2022, "SUV", 1350000, "Gris volcán", "28,400 km"],
  ["Kia", "Niro Hybrid", 2024, "SUV híbrida", 515000, "Verde bosque", "7,300 km"],
  ["Lexus", "NX 350h", 2023, "SUV híbrida", 985000, "Plata iridio", "14,900 km"],
  ["Mercedes-Benz", "C 200 Avantgarde", 2022, "Sedán", 735000, "Negro obsidiana", "35,100 km"],
  ["Nissan", "X-Trail Exclusive", 2024, "SUV", 582000, "Azul océano", "6,800 km"],
  ["Volkswagen", "Taos Highline", 2023, "SUV", 449000, "Gris platino", "21,600 km"],
  ["Cupra", "Formentor VZ", 2024, "SUV", 699000, "Gris mate", "5,400 km"],
  ["Chevrolet", "Tahoe RST", 2022, "SUV", 1095000, "Blanco diamante", "42,700 km"],
  ["Toyota", "Corolla SE", 2024, "Sedán", 389000, "Rojo vino", "8,200 km"],
  ["Honda", "Civic Touring", 2023, "Sedán", 515000, "Gris meteoro", "19,500 km"],
  ["Hyundai", "Tucson Limited", 2024, "SUV", 569000, "Verde amazonas", "7,900 km"],
  ["Kia", "Sportage SXL", 2023, "SUV", 535000, "Blanco nieve", "16,100 km"],
  ["Subaru", "Outback Touring", 2022, "Todoterreno", 625000, "Verde pino", "32,600 km"],
  ["Land Rover", "Defender 110", 2023, "Todoterreno", 1480000, "Arena del desierto", "18,900 km"],
  ["Mini", "Cooper S 3 puertas", 2024, "Hatchback", 528000, "Verde british", "4,600 km"],
  ["Audi", "Q5 S line", 2023, "SUV", 895000, "Azul navarra", "20,300 km"],
  ["BMW", "X3 xDrive30i", 2022, "SUV", 799000, "Blanco alpino", "38,700 km"],
  ["Ford", "Maverick Lariat", 2023, "Pickup", 598000, "Gris carbonizado", "14,200 km"],
  ["Ram", "1500 Laramie", 2022, "Pickup", 925000, "Negro diamante", "45,800 km"],
  ["GMC", "Sierra AT4", 2023, "Pickup", 1080000, "Rojo cayena", "24,100 km"],
  ["Hyundai", "Ioniq 5 Limited", 2024, "SUV eléctrico", 899000, "Gris cyber", "6,100 km"],
  ["Kia", "EV6 GT-Line", 2023, "SUV eléctrico", 945000, "Azul acero", "13,700 km"],
  ["Polestar", "2 Long Range", 2023, "Sedán eléctrico", 825000, "Blanco nieve", "17,500 km"],
  ["Lexus", "ES 300h", 2022, "Sedán híbrido", 695000, "Azul profundo", "29,800 km"],
  ["Toyota", "Prius Premium", 2024, "Sedán híbrido", 589000, "Plata metálico", "5,900 km"],
  ["Renault", "Kardian Premiere", 2024, "SUV", 398000, "Naranja cobre", "3,200 km"],
  ["Peugeot", "3008 GT", 2023, "SUV", 545000, "Gris Artense", "18,600 km"],
  ["Seat", "Leon FR", 2022, "Hatchback", 389000, "Rojo desire", "27,400 km"],
  ["Porsche", "718 Cayman", 2021, "Deportivo", 1295000, "Amarillo racing", "19,200 km"],
  ["Ford", "Mustang GT", 2023, "Deportivo", 785000, "Azul atlántico", "12,800 km"],
] as const;

export const vehicles: Vehicle[] = vehicleData.map(([marca, modelo, año, tipo, precioNumero, color, kilometraje], index) => ({
  id: index + 1,
  marca,
  modelo,
  año,
  tipo,
  precioNumero,
  precio: `$${precioNumero.toLocaleString("en-US")} MXN`,
  color,
  kilometraje,
}));
