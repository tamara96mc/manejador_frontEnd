# Manejador JIRA & WhatsApp

Esta app es un manejador para poder crear una configuración, la cual se utiliza para generar un chatbot que mediante WhatsApp se pueden crear tickets en Jira.

![icon_logo](https://user-images.githubusercontent.com/60045207/148699722-7f62434b-efe1-4dce-8bb3-c377d63e47c4.jpg)

## Tecnologias utilizadas
- React js
- Redux
- Sass
- Git y Gitbut
- AWS y Amplify
- Axios
- NPM 
- Awesome icons

## Pantallas

## Registro 
![0_register](https://user-images.githubusercontent.com/60045207/148699029-f2a78b65-fd82-4108-8458-a3f240fe8716.PNG)

Pantalla para el registro de los usuarios con sistema de validación de campos.

## Login 

![1_login](https://user-images.githubusercontent.com/60045207/148699038-9801fcb6-e771-49c8-919c-31796137a4f8.PNG)

Pantalla para el incio de sesión de los usuarios con sistema de validación de campos.

## Perfil 

![x_profile](https://user-images.githubusercontent.com/60045207/148699044-d808281a-493e-4876-b487-edda841e7d30.PNG)

Pantalla para ver y editar el perfil del usuario.

## Home

![2_home](https://user-images.githubusercontent.com/60045207/148699054-4b5afacc-8ffc-4594-881a-64bf08d869a3.png)

Esta vista cuenta con dos partes, la primero es para configurar los datos de conexión con jira:

![3_home](https://user-images.githubusercontent.com/60045207/148699064-33a6460c-999b-43f5-a170-673e8729c527.PNG)
![4_home](https://user-images.githubusercontent.com/60045207/148699067-fac54774-61f9-4ea2-81bf-fee5c85ff3a7.PNG)

Y una vez que esos datos esten completado se puede acceder a la parte de generar el código QR, el cual será el chatbot.

## Clientes 

![5_clientes](https://user-images.githubusercontent.com/60045207/148699072-249d83f2-d463-48f9-9e40-f3800a7cefef.PNG)

En esta pantalla podemos ver el listado de clientes que tienen permisos para crear tickets mediante whatsApp, buscar en entre ellos, borrarlos y poder crear un nuevo.

Y seleccionamos uno de ellos podemos editarlo.

## Proyectos

![6_proyectos](https://user-images.githubusercontent.com/60045207/148699082-485dded8-cd3b-447a-bf9d-f3aed9aec778.PNG)

En esta pantalla podemos crear, ver, buscar los proyectos, los cuales podrán seleccionarse cuando el chatbot te indique sobre proyecto quieres crear el ticket.

![7_proyectos](https://user-images.githubusercontent.com/60045207/148699092-0ce70ba2-8c7c-4ac2-9cef-073ebae9e9eb.PNG)

Si seleccionamos un proyecto podemos modificarlo en la misma pantalla.

## Campos

![8_campos](https://user-images.githubusercontent.com/60045207/148699096-931b3d71-99ed-45f2-94a4-b872e24f1b93.PNG)

En esta pantalla podemos crear, ver, buscar los campos, los cuales prodrán ser configurados en el vista de edición de cada cliente.

![9_campos](https://user-images.githubusercontent.com/60045207/148699107-3e908b11-862d-4db0-8d9e-42f4bc0a2c15.PNG)

Si seleccionamos un campo podemos modificarlo en la misma pantalla.

## Detalles cliente 

![10_datos](https://user-images.githubusercontent.com/60045207/148699127-792e6be8-5fd8-4cf8-8f60-e5c17131c32f.PNG)

En esta pantalla editar el cliente y configurar sus datos.

![11_datos](https://user-images.githubusercontent.com/60045207/148699133-29c70cdc-d0a5-42a7-bc84-cbe87593bbcc.PNG)

Los datos también se pueden editar si los seleccionamos.

## Responsive desing

Tambíén acceder a ella desde un dispositivo movil.

![PWA](https://user-images.githubusercontent.com/60045207/148699178-79491dd0-fb30-45a2-8b82-1b64a45bfc03.jpg)
![Screenshot_20220109-203024](https://user-images.githubusercontent.com/60045207/148699182-a5f0ddac-f520-4fc6-bbee-2779fa0c49b7.jpg)
![Screenshot_20220109-203156](https://user-images.githubusercontent.com/60045207/148699184-c5f137a2-0d4e-4ee8-9d57-f0764c06f365.jpg)
![Screenshot_20220109-203224](https://user-images.githubusercontent.com/60045207/148699186-2ae3e6fa-a4aa-4f1c-b822-6d8c85c14236.jpg)

## Hosting

La PWA está disponible en https://desarrollo.d3s6w5jo3kmxpt.amplifyapp.com/

## Chatbot

Ejemplo de un chatbot para crear tickets mediante WhatsApp.

Si tienes permisos como cliente:
![Screenshot_20220109-212026](https://user-images.githubusercontent.com/60045207/148699427-89130a39-ed21-4901-be95-d965f45bb3dd.jpg)
![Screenshot_20220109-212040](https://user-images.githubusercontent.com/60045207/148699441-f11cb8dc-0acd-4a6a-ab1e-6853526a202d.jpg)
![Screenshot_20220109-212048](https://user-images.githubusercontent.com/60045207/148699444-4f117069-a9f7-4c3a-9457-65501383e409.jpg)

Si no tienes permisos:
![Screenshot_20220109-212131](https://user-images.githubusercontent.com/60045207/148699447-b7d1bf59-0c71-456c-af01-672ab28fb06b.jpg)

Y en Jira ser crearia el ticket:

![tickect](https://user-images.githubusercontent.com/60045207/148699552-6f307257-9ea9-41f7-b136-c5c81ffca8e4.PNG)

## Features

- Poder dar permisos a los clientes sobre los proyectos que pueden crear tickets mediante WhatsApp.
- Poder configurar más de un Jira.
- Poder personalizar los mensajes del chatbot.

