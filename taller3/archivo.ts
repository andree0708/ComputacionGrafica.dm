//PARTE 1
// 1. Estudiante
interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): string;
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matemáticas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogotá',
    pais: 'Colombia',
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  },
};

console.log(estudiante.mostrarInfo());


// 2. Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto: Producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 3500,
  stock: 10,
  mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
  },
};

console.log(producto.mostrarDetalle());


// 3. Película
interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  },
};

console.log(pelicula.reproducir());


// 4. Vehículo
interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}

const vehiculo: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022,
  encender() {
    return `${this.marca} ${this.modelo} está encendido`;
  },
};

console.log(vehiculo.encender());


// 5. Usuario
interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}

const usuario: Usuario = {
  username: 'admin01',
  password: '123456',
  roles: ['admin', 'editor'],
  login() {
    return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
  },
};

console.log(usuario.login());

//PARTE 2

// 1) Error: no se puede usar `true` como tipo literal si se quiere permitir true/false
let myValue: number | string | boolean = 10;
console.log("myValue:", myValue);


// 2) Error: usar `Boolean` (con mayúscula) no es recomendable, debe ser `boolean` (primitivo)
let myBoolean: boolean = true;
console.log("myBoolean:", myBoolean);


// 3) Error: se declaró como number pero se asignó un string
let healthPoints: number = 150;
console.log("healthPoints:", healthPoints);


// 4) Error: `"otraEtiqueta"` no está en los tipos permitidos
let otherMultipleDataType: number | boolean | "myTag" = "myTag";
console.log("otherMultipleDataType:", otherMultipleDataType);


// 5) `myVar` sin tipo explícito es `any`, está bien
let myVar: any;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log("myVar:", myVar);


// 6) Error: una constante debe inicializarse al declararse
const myConstant: number = 100;
console.log("myConstant:", myConstant);


// 7) Error: el tipo inferido de `"Texto inicial"` es `string`, no puede reasignarse con número
let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;
console.log("inferedDataType:", inferedDataType);


// 8) Error: `1` no es boolean
const isActive: boolean = true;
console.log("isActive:", isActive);


// 9) Error: se asignó un `boolean` pero solo acepta number o string
let mixed: number | string = "texto";
console.log("mixed:", mixed);


// 10) Error: no se puede usar la palabra reservada `while` como nombre de variable
let miWhile: string = "Hola";
console.log("miWhile:", miWhile);


// 11) Error: `numer` no existe, debe ser `number`
let myNumber: number = 10;
console.log("myNumber:", myNumber);


// 12) Error: el array es number[] pero `"3"` es string
let numeros: number[] = [1, 2, 3];
console.log("numeros:", numeros);


// 13) Error: la tupla `[string, number]` requiere 2 elementos
let tupla: [string, number] = ["Hola", 10];
console.log("tupla:", tupla);


// 14) Error: la tupla `[string, boolean]` recibió valores invertidos
let otraTupla: [string, boolean] = ["Hola", true];
console.log("otraTupla:", otraTupla);


// 15) Error: `"Hola mundo"` es string, no puede reasignarse a null sin usar union
let texto: string | null = "Hola mundo";
texto = null;
console.log("texto:", texto);


// 16) Error: `"amarillo"` no está en el tipo literal
let color: "rojo" | "verde" | "azul" = "rojo";
console.log("color:", color);


// 17) `any` permite todo, pero cuidado con métodos
let valor: any = 10;
// Error: 10 no tiene método `toUpperCase`, mejor usar string
valor = "texto";
console.log("valor.toUpperCase():", valor.toUpperCase());


// 18) Error: `const` no se puede reasignar
let version: number = 1.0;
version = 2.0;
console.log("version:", version);


// 19) Error: el objeto `persona` no tiene `apellido` definido
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log("persona:", persona);


// 20) Error: `undefined` no es `number`
// se debe permitir `undefined` explícitamente
let edad: number | undefined = undefined;
console.log("edad:", edad);


export{};