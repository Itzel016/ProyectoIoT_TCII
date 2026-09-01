# Sistema IoT para el monitoreo de incendios en el interior de una vivienda.
**Problemática**

Las principales causas de incendios en viviendas en México se relacionan con fallas en las instalaciones eléctricas, fugas o acumulación de Gas LP, grasa en la cocina y incendios provocados intencionalmente; cuando ocurre un incendio dentro de una vivienda de manera inesperada esta se propaga rápidamente dentro de la vivienda poniendo en riesgo a los habitantes de esta. Durante un incendio las personas y sus bienes materiales se encuentran en riesgo, ya que el fuego puede provocar pérdidas económicas debido a la destrucción de muebles, documentos y otros objetos de valor, además la exposición al humo y el fuego ponen en riesgo la integridad de las personas que habitan la vivienda y en casos más graves provocar lesiones y incluso pérdidas humanas.
Uno de los problemas que se presenta es que cuando el incendio se detecta ha alcanzado una gran parte de la vivienda y limitando el tiempo para que los habitantes salgan para solicitar ayuda. Por ello es necesario contar con un sistema capaz de detectar de manera temprana un posible incendio mediante el uso de sensores de humo, gas, temperatura y humedad con el propósito de identificar de manera oportuna la presencia de un incendio brindando mayor seguridad para los habitantes y reducción de pérdidas económicas.

El presente proyecto demuestra el uso de tecnologías relacionadas con el *Internet de las Cosas* (IoT o por sus siglas en inglés _Internet of Things_) y su relación con los Sistemas Embebidos al integrar la combinación entre hardware y software.
En base al diseño realizado para crear el sistema se consideran los siguientes elementos: 
+ Microcontrolador: Placa de desarrollo ESP32
+ Sensores:
+ Actuadores:
+ Protocolos de comunicación: MQTT
+ Tecnologías de comunicación: WiFi, Bluetooth
+ Interfaz:

**Hipotesis**

La implementación de un sistema IoT para el monitoreo de temperatura, humo y gases dentro de una vivienda permitirá detectar oportunamente condiciones que puedan estar relacionadas con un incendio. El sistema podrá generar alertas para informar al usuario sobre una posible situación de riesgo, lo que permitirá mejorar el tiempo de respuesta ante una emergencia.

**Justificación**

El desarrollo de este proyecto es importante debido a que busca mejorar la seguridad dentro de las viviendas mediante el uso de tecnología IoT. La integración de sensores y conexión inalámbrica permitirá detectar condiciones que puedan indicar la presencia de un incendio y comunicar esta información de manera oportuna al usuario.

Asimismo, el sistema permitirá monitorear las condiciones del interior de la vivienda y generar alertas cuando se detecten valores anormales, incluso cuando el usuario no se encuentre en el lugar. El uso de componentes electrónicos accesibles permitirá desarrollar una alternativa funcional y de bajo costo para 

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

## Componentes principales

| Cantidad | Componente | Modelo sugerido | Función |
|---:|---|---|---|
| 1 | Microcontrolador | ESP32 DevKit | Recibir y procesar las lecturas de los sensores, controlar las alarmas y enviar información mediante Wi-Fi. |
| 1 | Sensor de humo y gas | MQ-2 | Detectar humo y gases inflamables como gas LP, metano y butano. |
| 1 | Sensor de flama | KY-026 | Identificar radiación infrarroja relacionada con la presencia de una llama. |
| 1 | Sensor de temperatura y humedad | DHT11 o DHT22 | Monitorear cambios de temperatura y humedad dentro de la vivienda. |
| Varios | Indicadores LED | LED verde, amarillo y rojo | Representar visualmente el estado normal, de advertencia o de peligro. |
| 3 | Resistencias | 220 Ω | Limitar la corriente que circula por los LED. |
| 1 | Protoboard | Tamaño mediano | Permitir la conexión temporal de los componentes sin necesidad de soldarlos. |
| Varios | Cables de conexión | Jumper macho-macho y macho-hembra | Comunicar eléctricamente el ESP32 con los sensores y actuadores. |
| 1 | Cable de alimentación | USB compatible con ESP32 | Programar y alimentar el microcontrolador ESP32. |
| 1 | Fuente de alimentación | 5 V regulados | Proporcionar energía estable al prototipo. |
| 1 | Casita | Replica a escala de un espacio de vivienda | Proteger los componentes permitiendo monitorear las variables replicando la función dentro de una vivienda. |

## Descripción de los componentes

### ESP32

El ESP32 será el componente principal del sistema. Se encargará de leer los sensores, comparar los valores con los niveles establecidos y determinar si existe una posible condición de riesgo.

Se seleccionó porque incorpora conexión Wi-Fi y Bluetooth, cuenta con entradas analógicas y digitales y posee suficiente capacidad para controlar varios sensores y actuadores. Su conectividad permitirá enviar las mediciones y alertas a una plataforma IoT.

### Sensor MQ-135

**¿Qué es?**

> El sensor MQ-135 es un sensor utilizado para detectar cambios en la calidad del aire y la presencia de determinados gases. En este proyecto se utilizará para monitorear la concentración de humo dentro de una vivienda y detectar posibles indicios de incendio.

**¿Cómo funciona?**

> El sensor detecta cambios en la concentración de sustancias presentes en el aire y genera una señal eléctrica que puede ser interpretada por el ESP32.

> Dentro del sistema, el sensor monitorea continuamente la concentración de humo. Los valores obtenidos son enviados al ESP32, que los adquiere y transmite hacia el equipo de monitoreo.

**¿Cómo se implementaría?**

> El sensor MQ-135 se conectará al módulo ESP32. El sensor realizará el monitoreo de la concentración de humo presente en el ambiente.

> El ESP32 se encargará de adquirir la información proporcionada por el sensor y transmitirla hacia el equipo de monitoreo.

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

- Detecta determinados gases presentes en el aire.
- Permite detectar cambios en la calidad del aire.
- Permite monitorear la concentración de humo.
- Cuenta con salida analógica.
- Puede contar con salida digital.
- Puede conectarse al ESP32.
- Requiere un periodo de calentamiento para obtener lecturas más estables.

**Función dentro del proyecto**

> El sensor MQ-135 tiene como función monitorear la concentración de humo dentro de la vivienda. La información obtenida será adquirida por el ESP32 y transmitida hacia el equipo de monitoreo para identificar condiciones normales o posibles indicios de incendio.

### Sensor de flama KY-026

El sensor KY-026 detecta radiación infrarroja producida por una llama. Se utilizará como una señal complementaria para comprobar la posible presencia de fuego.

Su funcionamiento depende de que la llama se encuentre dentro de su campo de visión. Por este motivo, no debe utilizarse como el único mecanismo de detección.

### Sensor DHT11 o DHT22

Este sensor permitirá medir la temperatura y la humedad del ambiente. Un incremento considerable de temperatura puede representar una condición anormal, especialmente cuando también se detecta humo, gas o una flama.

El DHT11 es económico y suficiente para una demostración básica. El DHT22 puede utilizarse si se requiere mayor precisión y un intervalo de medición más amplio.

### Buzzer

El buzzer funcionará como alarma local. Cuando el ESP32 detecte una condición peligrosa, lo activará para alertar a las personas que se encuentren dentro de la vivienda.

La alarma local deberá funcionar aunque el sistema no tenga conexión a Internet.

### Indicadores LED

Los indicadores LED mostrarán el estado del sistema

## Materiales para montaje

Además de los componentes electrónicos, se necesitarán los siguientes materiales:

- Protoboard.
- Cables jumper (Macho - Hembra / Hembra - Hembra / Macho - Macho)
- Resistencias de 220 Ω.
- Cable USB.
- Prototipo físico a escala de una vivienda o espacio departamental
- Cinta Aislante
- Multímetro para verificar voltajes

## Herramientas de software

| Software o servicio | Utilidad |
|---|---|
| Arduino IDE | Programación y carga del código en el ESP32. |
| Lenguaje C/C++ | Lectura de sensores y programación de la lógica de detección. |
| Monitor serial | Visualización y comprobación de las mediciones durante las pruebas. |
| GitHub | Control de versiones, almacenamiento del código y documentación del proyecto. |

La plataforma IoT definitiva será seleccionada de acuerdo con los requerimientos del proyecto. Para la primera versión se priorizarán la lectura de sensores y la activación de la alarma local.

## Componentes opcionales

En versiones posteriores se podrían incorporar:

- Pantalla OLED para mostrar las mediciones.
- Memoria microSD para guardar información sin conexión.
- Relé para controlar un extractor.
- Batería de respaldo.
- Aplicación móvil para recibir notificaciones.
- Cámara para comprobar visualmente la presencia de fuego.

Los actuadores que controlen equipos eléctricos, válvulas o sistemas de extinción necesitarán aislamiento, protecciones y una revisión técnica adicional.

## Referencia

Chow Díaz, S. Y., Cuthbert Moreno, A. A., Sambola, D.-M., & Flores-Pacheco, J. A. (2023). Sistema de alerta temprana para la reducción de riesgos de incendios en viviendas. *Nexo Revista Científica, 36*(03), 241–251. https://doi.org/10.5377/nexo.v36i03.16446

contribuir a la prevención y detección oportuna de incendios en los hogares.
