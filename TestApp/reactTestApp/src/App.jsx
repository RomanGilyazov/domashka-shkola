import Image from "./components/Nadpis";
import Frame from "./components/Frame";
import SecondFrame from "./components/SecondFrame";
import Kompetent from "./components/Kompetent";



function App() {
return (
    <footer>
      <div ckassName="wrapper">
        <Image />
        <Frame name="Гилязов Роман" text="Да, да. Это я. Как я докатился до жизни такой?"/>
        <SecondFrame text1="Умею что-то на C#. (На уровне первокурсника)"/>
        <SecondFrame text1="Стрессоустойчивость"/>
        <SecondFrame text1="Умею договариваться (ха-ха-ха)"/>
        <SecondFrame text1="Всё, больше ничего не умею"/>
        <Kompetent name="Я бы хотел улучщить работу в команде" img src="src/img/work.jpg" />
        <Kompetent name="Я бы хотел хорошо владеть навыками веб программрования" img src="src/img/web.jpg"/>
        <Kompetent name="Я хочу улучшить навык Тайм-менеджмента" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnPvX6YovjOm6AJWSXaJlUxUxRNCxUV0x76op2nju-Q&s"/>
        <Kompetent name="Я хочу понять деловой этикет" img src="https://www.brialdi.ru/upload/resize_cache/iblock/91b/660_400_1/91b0939b7045dba886f0212b5489e8c9.jpg"/>
        <Kompetent name="Я хочу продвигаться в способности к самостоятельному обучению" img src="https://ecvdo.ru/assets/images/papka-nova-1/samostoyatelnij-student.jpg" marginTop="-1365px" 
        marginLeft="400px" />
        <Kompetent name="Я хочу управлять проектами" img src="https://rocketbrain.ru/wp-content/uploads/2020/06/it_projects-1024x768.jpg" marginTop="24px" marginLeft="400px"/>
        <Kompetent name="Я хочу на Grove Street" img src="https://i.pinimg.com/564x/64/34/af/6434af3761f24fd65c00551196b7e511.jpg" marginTop="24px" marginLeft="400px"/>
        <Kompetent name="Я хочу развивать Аналитическое мышление" img src="https://assets-global.website-files.com/620252cf99d07346b52a4bf2/623ff7f66b70a7628feea015_6239eb9ce85b494e01f72632_pasted%2520image%25202.png" marginTop="24px" marginLeft="400px" />
        <Kompetent name="Я хочу мерс" img src="https://www.wardsauto.com/sites/wardsauto.com/files/Mercedes%20E-Class%20Coupe%2020.jpg" marginTop="-1520px" marginLeft="800px"/>
        <Kompetent name="Я хочу поиграть в GTA SA" img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/75/Grand_Theft_Auto_San_Andreas.jpg/274px-Grand_Theft_Auto_San_Andreas.jpg" marginTop="24px" marginLeft="800px"/>
        

      </div>
    </footer>
  );
}
export default App;
