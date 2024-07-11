# diceware-spanish

Esta es una implementación de un generador de passphrases basado en el método Diceware con palabras en español. 

## Diceware
Diceware es un método que consiste en tirar dados varias veces para seleccionar palabras de un diccionario, que luego son utilizadas para armar un passphrase con muy alta entropía. 

## ¿Por qué usar palabras aleeatorias?

### 1 - Fortaleza
La fundamentación matemática indica que estos passphrases de palabras aleatorias con separador (por ej el punto ".") son mucho más seguros que una "contraseña segura" habitual armada por caracteres aleatorios. 

En síntesis, la combinatoria de 4 palabras de un diccionario de 7777 palabras es mucho más costosa de crackear que la combinatoria de 10 caracteres aleatorios de; contando letras, números y algunos símbolos; 40 caracteres.

Para comprender este análisis recomiendo leer el sitio [useapassphrase](https://www.useapassphrase.com/) que analiza un [cómic de xkcd](https://xkcd.com/936/).

### 2 - Usabilidad
La otra ventaja es que se pueden recordar y escribir con facilidad.

¿Te pasó tener que escribir "dUCb6z~KQ%(a-R" para conectar el smart TV al wifi? ¿O para iniciar sesión en algun dispositivo en donde no tenes instalado el gestor de contraseñas? Esto se facilita enormemente si son simples palabras =)

_¿Usas un gestor de contraseñas, no? Otro tema..._

## Implementación

A raíz del análisis anterior, hace tiempo que prefiero el uso de este tipo de passphrases, pero no encontré a la fecha una herramienta que me facilite su creación.

Si bien ya existen algunos generadores diceware en Internet, no había ninguno en español, y todos ellos usan Math.Random() como fuente de aleatoriedad.

Para esta implementación preferí el uso del método [Crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues), el cual (a diferencia del anterior) se considera criptográficamente fuerte.

### Live demo
La aplicación se encuentra corriendo en https://diceware-spanish.netlify.app/