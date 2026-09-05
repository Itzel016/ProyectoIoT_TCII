# Sistema IoT para la detección de incendios en el interior de una vivienda.
**Problemática**

Las principales causas de incendios en viviendas en México se relacionan con fallas en las instalaciones eléctricas, fugas o acumulación de Gas LP, grasa en la cocina y incendios provocados intencionalmente; cuando ocurre un incendio dentro de una vivienda de manera inesperada esta se propaga rápidamente dentro de la vivienda poniendo en riesgo a los habitantes de esta. Durante un incendio las personas y sus bienes materiales se encuentran en riesgo, ya que el fuego puede provocar pérdidas económicas debido a la destrucción de muebles, documentos y otros objetos de valor, además la exposición al humo y el fuego ponen en riesgo la integridad de las personas que habitan la vivienda y en casos más graves provocar lesiones y incluso pérdidas humanas.
Uno de los problemas que se presenta es que cuando el incendio se detecta ha alcanzado una gran parte de la vivienda y limitando el tiempo para que los habitantes salgan para solicitar ayuda. Por ello es necesario contar con un sistema capaz de detectar de manera temprana un posible incendio mediante el uso de sensores de humo, gas, temperatura y humedad con el propósito de identificar de manera oportuna la presencia de un incendio brindando mayor seguridad para los habitantes y reducción de pérdidas económicas.

El presente proyecto demuestra el uso de tecnologías relacionadas con el *Internet de las Cosas* (IoT, por sus siglas en inglés *Internet of Things*) y su relación con los Sistemas Embebidos, mediante la integración de hardware y software para la detección y respuesta ante posibles incendios en el interior de una vivienda.

En base al diseño realizado para crear el sistema se consideran los siguientes elementos:

* **Microcontrolador:** Placa de desarrollo ESP32.
* **Sensores:** BME680, MQ-2, KY-026 y GPS NEO-6M.
* **Actuadores:** Buzzer, LEDs, pantalla LCD, servomotores, bomba de agua y aspersor.
* **Protocolos de comunicación:** MQTT.
* **Tecnologías de comunicación:** Wi-Fi y Bluetooth.
* **Backend:** Spring Boot y API REST.
* **Base de datos:** MySQL para el almacenamiento de mediciones, eventos y alertas.
* **Interfaz:** Aplicación web desarrollada con HTML, CSS y JavaScript para el monitoreo de las variables, visualización de alertas y control de los actuadores.

**Hipotesis**

La implementación de un sistema IoT para el monitoreo de temperatura, humo y gases dentro de una vivienda permitirá detectar oportunamente condiciones que puedan estar relacionadas con un incendio. El sistema podrá generar alertas para informar al usuario sobre una posible situación de riesgo, lo que permitirá mejorar el tiempo de respuesta ante una emergencia.

**Justificación**

El desarrollo de este proyecto es importante debido a que busca mejorar la seguridad dentro de las viviendas mediante el uso de tecnología IoT. La integración de sensores y conexión inalámbrica permitirá detectar condiciones que puedan indicar la presencia de un incendio y comunicar esta información de manera oportuna al usuario.

Asimismo, el sistema permitirá monitorear las condiciones del interior de la vivienda y generar alertas cuando se detecten valores anormales, incluso cuando el usuario no se encuentre en el lugar. El uso de componentes electrónicos accesibles permitirá desarrollar una alternativa funcional y de bajo costo 

Alcance

El proyecto comprende el diseño y desarrollo de un prototipo destinado al monitoreo de las condiciones ambientales en una o varias áreas de una vivienda. Para ello, se utilizarán sensores que permitirán obtener información sobre variables como temperatura, humo y gases.

Los datos obtenidos serán procesados mediante un microcontrolador y enviados a través de una conexión a Internet hacia una plataforma de monitoreo, donde podrán ser consultados por el usuario. Cuando se detecten valores que representen una posible situación de riesgo, el sistema podrá activar una alarma y enviar una notificación.

El proyecto estará orientado principalmente a la detección y notificación de posibles incendios. No incluirá sistemas automáticos para extinguir el fuego y no pretende sustituir los equipos profesionales de detección y protección contra incendios.

Estos son los elementos empleados en el proyecto

# Materiales y componentes

Para desarrollar el prototipo del sistema IoT de detección de incendios se utilizaron componentes electrónicos capaces de medir temperatura, humo, gases y presencia de flama. También se incorporaron elementos para procesar la información y emitir alertas en notificaciones.

# **Sensor MQ-135**

**¿Qué es?**

> El sensor MQ-135 es un sensor utilizado para detectar cambios en la calidad del aire y la presencia de determinados gases. En este proyecto se utilizará para monitorear la concentración de humo dentro de una vivienda y detectar posibles indicios de incendio.

**¿Cómo funciona?**

> El sensor detecta cambios en la concentración de sustancias presentes en el aire y genera una señal eléctrica que puede ser interpretada por el ESP32.

> Dentro del sistema, el sensor monitorea continuamente la concentración de humo. Los valores obtenidos son enviados al ESP32, que los adquiere y transmite hacia el equipo de monitoreo.

**Valores de referencia**

> * La concentración normal de humo se establece entre 10 y 100 ppm (partes por millón).

> * Cuando la concentración de humo alcanza o supera los 300 ppm, se considera un posible indicio de incendio.

**¿Cómo se implementaría?**

> 1. El sensor MQ-135 se conectará al módulo ESP32. El sensor realizará el monitoreo de la concentración de humo presente en el ambiente.

> 2. El ESP32 se encargará de adquirir la información proporcionada por el sensor y transmitirla hacia el equipo de monitoreo.

**Entrada**

> La entrada del sensor corresponde al aire del ambiente, en el cual se encuentran las sustancias y gases que serán detectados.

**Salida**

> La salida del sensor es una señal eléctrica que representa los cambios detectados en el ambiente. Esta información puede ser leída por el ESP32 para obtener los valores correspondientes a la concentración detectada.

**Funciones y comandos utilizados**

- `analogRead()`: permite realizar la lectura de una señal analógica proveniente del sensor.
- `digitalRead()`: permite realizar la lectura de una señal digital del módulo.
- `pinMode()`: permite configurar el pin del ESP32 como entrada.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.println()`: permite mostrar los valores obtenidos por el sensor.
- `if`: permite comparar los valores obtenidos con los límites definidos.

**Características**

> - Detecta determinados gases presentes en el aire.
> - Permite detectar cambios en la calidad del aire.
> - Permite monitorear la concentración de humo.
> - Cuenta con salida analógica.
> - Puede contar con salida digital.
> - Puede conectarse al ESP32.
> - Requiere un periodo de calentamiento para obtener lecturas más estables.
> - La concentración normal de humo establecida para el sistema es de 10 a 100 ppm.
> - Una concentración igual o superior a 300 ppm se considera un posible indicio de incendio.

**Función dentro del proyecto**

> El sensor MQ-135 tiene como función monitorear la concentración de humo dentro de la vivienda. La información obtenida será adquirida por el ESP32 y transmitida hacia el equipo de monitoreo para identificar condiciones normales o posibles indicios de incendio.

<img width="709" height="401" alt="Imagen1" src="https://github.com/user-attachments/assets/ac54b2dd-b235-49e1-b2c7-1657b883e7ef" />

# **Módulo ESP32**

**¿Qué es?**

> El ESP32 es un microcontrolador diseñado para desarrollar proyectos electrónicos y sistemas relacionados con el Internet de las Cosas. Cuenta con conectividad Wi-Fi y Bluetooth, además de pines que permiten conectar sensores y otros dispositivos.

> En este proyecto se utilizará como la unidad principal encargada de adquirir, procesar y transmitir la información obtenida por los sensores instalados dentro de la vivienda.

**¿Cómo funciona?**

> El ESP32 ejecuta un programa almacenado en su memoria. Este programa le permite leer las señales enviadas por los sensores, procesar los valores obtenidos y transmitir la información hacia el equipo de monitoreo.

> Su funcionamiento se divide principalmente en dos partes: la función `setup()`, que configura los componentes al encender el sistema, y la función `loop()`, que realiza continuamente la lectura y transmisión de los datos.

**Conectividad**

> El ESP32 cuenta con conexión Wi-Fi integrada, por lo que puede conectarse a una red local sin utilizar un módulo adicional.

> En el proyecto, esta conexión permitirá transmitir los valores obtenidos por los sensores hacia el equipo o plataforma de monitoreo. Si la conexión se interrumpe, el ESP32 continuará realizando las lecturas y podrá intentar reconectarse a la red.

**¿Cómo se implementaría?**

> 1. Los sensores utilizados en el proyecto se conectarán a los pines de entrada del ESP32.

> 2. El ESP32 adquirirá las señales analógicas o digitales generadas por los sensores.

> 3. Los valores obtenidos serán procesados y comparados con los límites definidos para el sistema.

> 4. El ESP32 se conectará a la red Wi-Fi disponible en la vivienda.

> 5. La información será transmitida hacia el equipo de monitoreo para mostrar el estado de las condiciones ambientales.

> 6. El proceso de lectura y transmisión se realizará continuamente mientras el sistema se encuentre encendido.

**Entradas**

> Las entradas del ESP32 corresponden a las señales analógicas y digitales enviadas por los sensores conectados al sistema.

> Entre las entradas contempladas se encuentra la señal generada por el sensor MQ-135, la cual representa los cambios detectados en la calidad del aire y la posible concentración de humo.

**Salidas**

> La salida principal del ESP32 será la información procesada y transmitida mediante Wi-Fi hacia el equipo de monitoreo.

> También puede utilizar la comunicación serial para mostrar las lecturas obtenidas durante la programación y las pruebas del prototipo.

**Pines utilizados**

| Pin o conexión | Tipo | Función |
|---|---|---|
| `VIN` o `5V` | Entrada | Permite alimentar la placa, dependiendo del modelo utilizado. |
| `3V3` | Salida | Proporciona alimentación regulada de 3.3 V. |
| `GND` | Conexión común | Funciona como referencia de tierra para el circuito. |
| `GPIO` | Entrada o salida | Permite conectar sensores y otros componentes. |
| `ADC` | Entrada analógica | Permite leer la señal analógica de sensores como el MQ-135. |
| `TX` y `RX` | Comunicación | Permiten enviar y recibir información mediante comunicación serial. |
| Wi-Fi | Comunicación inalámbrica | Permite transmitir la información hacia el equipo de monitoreo. |

> La selección definitiva de los pines GPIO dependerá del diagrama de conexiones del prototipo.

**Funciones y comandos utilizados**

- `setup()`: contiene las instrucciones que se ejecutan una sola vez al encender o reiniciar el ESP32.
- `loop()`: contiene las instrucciones que se ejecutan continuamente.
- `pinMode()`: permite configurar un pin como entrada o salida.
- `analogRead()`: permite adquirir una señal analógica proveniente de un sensor.
- `digitalRead()`: permite adquirir el estado digital de un sensor.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.print()`: muestra información en el monitor serial sin realizar un salto de línea.
- `Serial.println()`: muestra información en el monitor serial y realiza un salto de línea.
- `WiFi.begin()`: inicia la conexión del ESP32 con una red Wi-Fi.
- `WiFi.status()`: permite comprobar el estado de la conexión Wi-Fi.
- `if`: permite comparar las lecturas con los límites establecidos.
- `delay()`: establece una pausa entre las lecturas realizadas.
- `millis()`: permite controlar intervalos de tiempo sin detener completamente la ejecución del programa.

**Ejemplo de conexión Wi-Fi**

```cpp
#include <WiFi.h>

const char* nombreRed = "NOMBRE_DE_LA_RED";
const char* contrasena = "CONTRASENA";

void setup() {
  Serial.begin(115200);

  WiFi.begin(nombreRed, contrasena);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Conectando a la red Wi-Fi...");
  }

  Serial.println("ESP32 conectado a la red");
  Serial.println(WiFi.localIP());
}

void loop() {
}
```

> Por seguridad, el nombre y la contraseña reales de la red Wi-Fi no deberán publicarse dentro del repositorio de GitHub.

**Características**

> - Integra conectividad Wi-Fi.
> - Integra conectividad Bluetooth.
> - Puede recibir señales analógicas y digitales.
> - Cuenta con múltiples pines de entrada y salida.
> - Puede conectarse con diferentes tipos de sensores.
> - Puede procesar la información localmente.
> - Permite transmitir información mediante Internet.
> - Puede programarse utilizando Arduino IDE.
> - Es compatible con el lenguaje de programación C/C++.
> - Funciona con niveles lógicos de 3.3 V.
> - Puede utilizar protocolos de comunicación como UART, I2C y SPI.
> - Tiene un tamaño reducido y un consumo energético adecuado para prototipos IoT.

**Precauciones**

> - Los pines del ESP32 trabajan con un nivel lógico máximo de 3.3 V.
> - No se deben conectar señales de 5 V directamente a sus entradas.
> - Se debe comprobar el voltaje de salida de cada sensor antes de conectarlo.
> - Todos los componentes deben compartir una conexión común a `GND`.
> - Las conexiones deben realizarse con el ESP32 desconectado de la alimentación.
> - Las credenciales de la red Wi-Fi no deben publicarse en GitHub.

**Función dentro del proyecto**

> El ESP32 tendrá la función de controlar el proceso de adquisición y transmisión de la información del sistema. Recibirá las señales generadas por los sensores, procesará las lecturas y las comparará con los valores establecidos para identificar condiciones normales o posibles indicios de incendio.

> Posteriormente, transmitirá los resultados mediante Wi-Fi hacia el equipo de monitoreo, donde será posible consultar el estado de las condiciones ambientales dentro de la vivienda.

**Flujo de funcionamiento**

> **Sensores → ESP32 → procesamiento de datos → conexión Wi-Fi → equipo de monitoreo**

# **Sensor DHT11**

**¿Qué es?**

> El DHT11 es un sensor digital utilizado para medir la temperatura y la humedad relativa del ambiente. Es un componente económico y común en proyectos electrónicos y sistemas relacionados con el Internet de las Cosas.

> En este proyecto se utilizará para monitorear la temperatura dentro de una vivienda e identificar incrementos anormales que puedan estar relacionados con un posible incendio.

**¿Cómo funciona?**

> El DHT11 contiene un elemento encargado de medir la humedad y un termistor que permite detectar la temperatura. Internamente procesa ambas mediciones y las envía mediante una señal digital hacia el ESP32.

> El ESP32 solicita periódicamente la información al sensor y obtiene dos valores: la temperatura expresada en grados Celsius y la humedad relativa expresada en porcentaje.

> La temperatura por sí sola no confirma la existencia de un incendio. Por este motivo, sus lecturas serán analizadas junto con la información obtenida por el sensor MQ-135 y los demás componentes del sistema.

**Valores de medición**

| Variable | Rango aproximado | Precisión aproximada |
|---|---:|---:|
| Temperatura | De 0 °C a 50 °C | ±2 °C |
| Humedad relativa | De 20 % a 80 % | ±5 % |
| Frecuencia de lectura | Una lectura por segundo | 1 Hz |

> Estos valores corresponden a las características generales del DHT11 y pueden presentar variaciones dependiendo del fabricante, la ubicación y las condiciones ambientales.

**Valores de referencia para el proyecto**

> El sensor registrará continuamente la temperatura y la humedad dentro de la vivienda. Primero se obtendrán mediciones en condiciones normales para establecer un valor ambiental de referencia.

> Cuando se detecte un incremento considerable de temperatura respecto al valor normal, el ESP32 marcará la lectura como una posible condición de riesgo. Esta información será analizada junto con la concentración detectada por el MQ-135.

> El límite definitivo de temperatura no se establecerá de manera arbitraria. Se determinará durante la fase de calibración y pruebas controladas del prototipo.

**¿Cómo se implementaría?**

> 1. El sensor DHT11 se conectará a uno de los pines digitales del ESP32.

> 2. El sensor realizará mediciones periódicas de temperatura y humedad dentro de la vivienda.

> 3. El ESP32 solicitará las mediciones mediante la librería correspondiente.

> 4. Los valores obtenidos serán comparados con los límites definidos durante las pruebas del sistema.

> 5. La información será transmitida mediante Wi-Fi hacia el equipo de monitoreo.

> 6. Los valores del DHT11 serán analizados junto con la información proporcionada por el MQ-135 para identificar posibles condiciones de riesgo.

**Entrada**

> La entrada del DHT11 corresponde a las condiciones ambientales que rodean al sensor. El componente percibe la temperatura del aire y la cantidad de humedad presente en el entorno.

**Salida**

> La salida del DHT11 es una señal digital que contiene los valores de temperatura y humedad relativa.

> Esta señal es enviada a uno de los pines GPIO del ESP32, donde es interpretada mediante una librería de programación.

**Pines del sensor**

| Pin | Tipo | Función |
|---|---|---|
| `VCC` | Entrada | Proporciona alimentación eléctrica al sensor. |
| `DATA` | Salida digital | Envía al ESP32 los valores de temperatura y humedad. |
| `GND` | Conexión común | Conecta el sensor a tierra. |

> Algunos sensores DHT11 individuales cuentan con cuatro pines, mientras que los módulos comerciales normalmente tienen tres. En la versión de cuatro pines, uno de ellos no se utiliza.

**Conexión propuesta con el ESP32**

| DHT11 | ESP32 | Función |
|---|---|---|
| `VCC` | `3V3` | Alimentación de 3.3 V |
| `DATA` | `GPIO 14` | Transmisión de las mediciones |
| `GND` | `GND` | Tierra común |

> Si se utiliza el sensor DHT11 sin una tarjeta de módulo, puede necesitarse una resistencia de aproximadamente 10 kΩ entre los pines `VCC` y `DATA`. Algunos módulos ya incluyen esta resistencia.

**Librería utilizada**

> Para facilitar la comunicación entre el DHT11 y el ESP32 se utilizará la librería `DHT sensor library`, disponible en el administrador de librerías de Arduino IDE.

> También puede ser necesario instalar la librería `Adafruit Unified Sensor`, dependiendo de la versión utilizada.

**Funciones y comandos utilizados**

- `#include <DHT.h>`: incluye la librería necesaria para controlar el sensor.
- `DHT dht()`: crea el objeto que representa al sensor y define el pin utilizado.
- `dht.begin()`: inicia la comunicación con el DHT11.
- `dht.readTemperature()`: obtiene la temperatura en grados Celsius.
- `dht.readHumidity()`: obtiene el porcentaje de humedad relativa.
- `isnan()`: comprueba si ocurrió un error durante la lectura.
- `Serial.begin()`: inicia la comunicación serial.
- `Serial.print()`: muestra información sin realizar un salto de línea.
- `Serial.println()`: muestra información y realiza un salto de línea.
- `if`: permite comparar la temperatura con los límites establecidos.
- `delay()`: permite establecer un intervalo entre las lecturas.

**Ejemplo de lectura**

```cpp
#include <DHT.h>

#define PIN_DHT 14
#define TIPO_DHT DHT11

DHT dht(PIN_DHT, TIPO_DHT);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  float humedad = dht.readHumidity();
  float temperatura = dht.readTemperature();

  if (isnan(humedad) || isnan(temperatura)) {
    Serial.println("Error al obtener la lectura del DHT11");
    delay(2000);
    return;
  }

  Serial.print("Temperatura: ");
  Serial.print(temperatura);
  Serial.println(" °C");

  Serial.print("Humedad: ");
  Serial.print(humedad);
  Serial.println(" %");

  delay(2000);
}
```

> El intervalo de dos segundos permite que el sensor complete correctamente sus mediciones antes de solicitar una nueva lectura.

**Características**

> - Permite medir temperatura ambiental.
> - Permite medir humedad relativa.
> - Proporciona una señal digital.
> - Puede conectarse directamente al ESP32.
> - Tiene un consumo energético reducido.
> - Cuenta con un tamaño compacto.
> - Es económico y fácil de conseguir.
> - Puede programarse mediante una librería de Arduino IDE.
> - Su rango aproximado de temperatura es de 0 °C a 50 °C.
> - Su rango aproximado de humedad es de 20 % a 80 %.
> - Puede realizar aproximadamente una lectura por segundo.
> - No necesita una entrada analógica del ESP32.

**Precauciones y limitaciones**

> - El DHT11 no detecta directamente humo, gas ni fuego.
> - La temperatura por sí sola no permite confirmar un incendio.
> - Su rango y precisión son limitados en comparación con sensores más avanzados.
> - No debe colocarse directamente frente a una llama.
> - No debe exponerse al agua o a condensación.
> - Debe instalarse en una zona con circulación de aire.
> - Las lecturas deben realizarse con un intervalo suficiente.
> - Los valores obtenidos deben combinarse con las mediciones de otros sensores.

**Función dentro del proyecto**

> El DHT11 tendrá como función monitorear la temperatura y la humedad dentro de la vivienda. Sus mediciones serán adquiridas por el ESP32 y transmitidas hacia el equipo de monitoreo.

> Cuando se detecte un incremento anormal de temperatura, el ESP32 comparará esta información con los valores proporcionados por el MQ-135. La combinación de las mediciones permitirá identificar con mayor precisión condiciones normales o posibles indicios de incendio.

**Flujo de funcionamiento**

> **Temperatura y humedad del ambiente → DHT11 → ESP32 → procesamiento de datos → conexión Wi-Fi → equipo de monitoreo**

## Referencia

> Chow Díaz, S. Y., Cuthbert Moreno, A. A., Sambola, D.-M., & Flores-Pacheco, J. A. (2023). Sistema de alerta temprana para la reducción de riesgos de incendios en viviendas. *Nexo Revista Científica, 36*(03), 241–251. https://doi.org/10.5377/nexo.v36i03.16446

> Aosong Electronics Co., Ltd. (s. f.). *DHT11 humidity and temperature sensor datasheet*. https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf

> Espressif Systems. (s. f.). *ESP32 series datasheet*. https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf
