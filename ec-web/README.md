# next-js-11-registration-login-example

Next.js 11 - User Registration and Login Example

Documentation and live demo available at <https://jasonwatmore.com/post/2021/08/19/next-js-11-user-registration-and-login-tutorial-with-example-app>

<https://reffect.co.jp/react/react-hook-form>
<https://react-hook-form.com/api/usecontroller>

```shell
npm install react-hook-form
```

login test

```shell
74917b8d-447c-11ed-b7a9-64d75dd587d2
login api:https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/login?id=2
```
```shell
{"Accounts":{"employee_code":"1234567","employee_name":"aaaa"}}
```
centerapi:https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/center?center_no=0093
sireapi:https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/vender?vender_no=4466

```shell
post
https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/nyuka/getcounts
{
“center_no”:“0093",
“nyuka_begin”:“20230205",
“nyuka_end”:“20230210",
“sire_no”:“4466"
}
post
https://ec-warehouse-et76x6ix4q-an.a.run.app/api/v1/nyuka/getjaninfo
{
    “center_no”:“0093",
    “order_no”:“092628664",
    “product_cd”:“4901313149300"
}
patch
http://localhost:8080/api/v1/nyuka/update
{
    “center_no”:“0093",
    “order_no”:“092628664",
    “product_cd”:“4514410177277",
    “jiseki_su”:100
}
```
### openapi
https://ec-warehouse-et76x6ix4q-an.a.run.app/swagger/index.html#/default