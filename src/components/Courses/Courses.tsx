import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Courses = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      id="master-class"
      className="flex flex-col bg-beige justify-center items-center py-16 space-y-32"
    >
      {/* 1 */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
        className="flex flex-col w-[90%] md:w-[90%] 2xl:w-2/3 mx-auto"
      >
        <motion.h2
          custom={1}
          variants={itemVariants}
          className="mb-8 font-bold text-4xl text-brown"
        >
          Гончарство
        </motion.h2>
        <div className="flex-col md:grid lg:grid-cols-2 xl:grid-cols-3 md:gap-x-32 md:gap-y-16  space-y-16 md:space-y-0">
          <motion.div
            custom={2}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Індивідуальне заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 2 – 2,5 години</p>
            <p className="font-semibold text-xl">
              Вартість: 850 грн включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Гончарство - це унікальне заняття, яке привертає різних людей
              своєю красою та можливістю виразити себе через творчість. Воно
              підходить для творчих особистостей, шукачів нових викликів,
              любителів рукоділля та пар, які бажають провести час разом.
              Гончарство дозволяє розслабитися, зосередитися та розвинути творчі
              здібності, створюючи неповторні речі руками.
            </p>
          </motion.div>
          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Заняття для двох </h3>

            <p className="font-semibold text-xl">Тривалість: 2 – 2,5 години</p>
            <p className="font-semibold text-xl">
              Вартість: 1500 грн включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Гончарство для двох - це захоплююча можливість подорожувати у світ
              творчості разом зі своїм партнером або близькою людиною. Під
              керівництвом майстра гончаргне коло стає місцем зустрічі і
              спільного творчого процесу, де кожен може виразити свою
              унікальність і створити щось власне, що залишиться назавжди.
            </p>
            <p className="text-lg text-brown">
              Також можна створити один спільний проект в чотири руки, це дууже
              романтично!
            </p>
          </motion.div>{" "}
          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Групове заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 1,5 - 2 години</p>
            <p className="font-semibold text-xl">
              Вартість: (уточнити в які дні та години) - 850 грн включно з
              базовим випалом, а також можна створити власну групку від 4-х до
              6-х учасників та створити запис на зручний час в дитячій групі -
              400 грн
            </p>

            <p className="text-lg text-brown">
              Групове заняття по гончарству - це відмінна можливість для тих,
              хто цікавиться ручною роботою та творчістю, провести час з друзями
              або колегами, спробувати щось нове та розслабитися. Під
              керівництвом інструктора учасники навчаться гончарному мистецтву,
              обміняються досвідом і порадами, а кожен отримає унікальне глиняне
              творіння.
            </p>
          </motion.div>{" "}
          <motion.div
            custom={4}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Виїзний майстер-клас</h3>
            <p className="text-lg text-brown">
              Виїзні майстер-класи з гончарства можуть стати чудовим заходом для
              різних подій, таких як дні народження, корпоративні заходи або
              просто відпочинкові вікенди з друзями та родиною. Це унікальна
              можливість зблизити людей, створити спільні спогади та весело
              провести час, спробувавши щось нове і цікаве разом. Такий формат
              майстер-класу може надати незабутні враження і заохотити учасників
              розвивати свої творчі здібності та цікавитися мистецтвом
              гончарства.
            </p>
            <p className="text-lg text-brown">
              Для узгодження деталей залиш завку або зателефонуй.{" "}
              <span className="font-bold">(Проводимо у теплий період)</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
      {/* 2 */}
      <motion.div className="flex flex-col w-[90%] md:w-[90%] 2xl:w-2/3 mx-auto">
        <motion.h2
          custom={5}
          variants={itemVariants}
          className="mb-8 font-bold text-4xl text-brown"
        >
          Ліпка з глини
        </motion.h2>
        <div className="flex-col md:grid lg:grid-cols-2 xl:grid-cols-3 md:gap-x-32 md:gap-y-16 space-y-16 md:space-y-0">
          <motion.div
            custom={6}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Індивідуальне заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 1,5 – 2 години</p>
            <p className="font-semibold text-xl">
              Вартість: 700 грн включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Ліплення злини - це універсальне заняття, яке відкрито для всіх,
              незалежно від віку та професії. Для дітей це не лише засіб
              розвитку моторики та уяви, а й можливість творчого вираження.
              Художники використовують глину для створення вражаючих скульптур
              та виробів мистецтва. Творчі терапевти застосовують ліплення злини
              для розробки психологічних проблем. Любителі рукоділля знаходять у
              ньому відпочинок та задоволення, створюючи різноманітні вироби для
              дому та подарунків. Таким чином, ліплення злини є доступним та
              захоплюючим заняттям для всіх, хто бажає виразити свою творчість
              та відчути радість від роботи з руками.
            </p>
          </motion.div>
          <motion.div
            custom={7}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Заняття для двох </h3>

            <p className="font-semibold text-xl">Тривалість: 1,5 – 2 години</p>
            <p className="font-semibold text-xl">
              Вартість: 1300 грн включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Заняття з ліплення для двох - це чудова можливість провести час
              разом з близькою людиною, будь то друг, родич або партнер. Це
              сприяє спільному творчому процесу, спілкуванню та взаєморозумінню.
              Під час ліплення пара може обмінюватися ідеями, взаємно навчатися,
              сприймати інші погляди та створювати щось унікальне разом. Такі
              заняття сприяють підтримці та зміцненню взаємин, сприяють творчому
              розвитку обох учасників та залишають незабутні враження.
            </p>
            <p className="text-lg text-brown">
              Також можна спільно створити проект у чотири руки, що надає
              додатковий романтичний шар нашому спільному творчому процесу
            </p>
          </motion.div>{" "}
          <motion.div
            custom={8}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Групове заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 1,5 - 2 години</p>
            <p className="font-semibold text-xl">
              Вартість: (уточнити в які дні та години) - 700 грн включно з
              базовим випалом, а також можна створити власну групку від 4-х до
              6-х учасників та записатися на зручний час в дитячій групі - 400
              грн
            </p>
            <p className="text-lg text-brown">
              Приєднуйтесь до наших групових занять з ліпки і насолоджуйтеся
              творчим процесом разом з друзями, рідними або колегами! Групові
              заняття з ліпки - це чудовий спосіб провести час разом, де ви
              маєте можливість навчитися створювати захоплюючі твори разом з
              іншими учасниками. Під керівництвом нашого досвідченого майстра ви
              вивчите основи роботи з глиною, дізнаєтесь секретні техніки, а
              також зможете реалізувати свої творчі задуми.
            </p>
          </motion.div>{" "}
        </div>
      </motion.div>
      {/* 3 */}
      <div className="flex flex-col w-[90%] md:w-[90%] 2xl:w-2/3 mx-auto">
        <motion.h2
          custom={9}
          variants={itemVariants}
          className="mb-8 font-bold text-4xl text-brown"
        >
          Скульптура
        </motion.h2>
        <motion.div
          custom={10}
          variants={itemVariants}
          className="flex-col md:grid lg:grid-cols-2 xl:grid-cols-3 md:gap-x-32 md:gap-y-16 space-y-16 md:space-y-0"
        >
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-2xl">Індивідуальне заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 2,5 – 3 години</p>
            <p className="font-semibold text-xl">
              Вартість: 1050 грн до 15см в висоту включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Індивідуальна скульптура - це особистий творчий процес, де ви
              можете виразити свої унікальні ідеї та емоції через роботу з
              матеріалами. Це може бути маленький проект, який ви створюєте самі
              для себе, або великий і амбіційний проект, що вимагає багато часу
              та зусиль. Індивідуальна скульптура дозволяє вам вільно
              експериментувати з різними техніками, формами та матеріалами,
              розвиваючи ваші творчі здібності та дозволяючи виразити вашу
              унікальну ідентичність через мистецтво.
            </p>
            <p className="text-lg text-brown">
              Маштабні проекти за індивідуальним обрахунком
            </p>
          </div>
          <motion.div
            custom={11}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Заняття для двох </h3>

            <p className="font-semibold text-xl">Тривалість: 2,5 – 3 години</p>
            <p className="font-semibold text-xl">
              Вартість: 2000 грн включно з базовим випалом
            </p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              Скульптура - це процес виразу, який може бути індивідуальним або
              спільним проектом. Вона може бути маленькими творіннями, які
              створюються за короткий час, або великими проектами, які забирають
              багато часу. Незалежно від розміру або тривалості проекту,
              скульптура дозволяє виразити творчість та сприяє задоволенню від
              роботи з матеріалами та формами.
            </p>
          </motion.div>{" "}
          <motion.div
            custom={12}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Групове заняття</h3>

            <p className="font-semibold text-xl">Тривалість: 3- 3,5 години</p>
            <p className="font-semibold text-xl">
              Вартість: (уточнити в які дні та години) - 1050 грн включно з
              базовим випалом, а також можна створити власну групку від 4-х до
              6-х учасників та створити запис на зручний час в дитячій групі -
              400 грн
            </p>

            <p className="text-lg text-brown">
              Групові скульптурні заняття - це не лише можливість розвинути своє
              мистецьке майстерність, а й спосіб зблизити людей, створити
              мистецький шедевр разом. Участь у таких заняттях дозволяє відчути
              взаємопідтримку, обмінятися ідеями та взаємно навчатися. Кожен
              учасник має можливість виразити свою творчість та внести свій
              внесок у спільний проект. Заняття в групі дозволяє не лише вивчити
              нові техніки скульптури, а й отримати задоволення від творчого
              спілкування з однодумцями.
            </p>
          </motion.div>{" "}
          <motion.div
            custom={13}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">
              Випал виробів та глазурування
            </h3>
            <p className="text-lg text-brown">
              У нашій гончарній майстерні термічна обробка глини перетворює
              звичайні вироби в унікальні керамічні шедеври! Печі, нагріті до
              більш ніж 1000°C, надають виробам міцності та стійкості. Чи хочете
              ви матову поверхню, чи, можливо, ви більше схильні до глянцевого
              вигляду? Ми гарантуємо вам неповторні ефекти, які зачарують ваші
              очі! А що ще цікавіше: участь у майстер-класі обійдеться лише 250
              гривень за утільний випал або 350 гривень за поливу. Приходьте до
              нас і відчуйте справжню магію створення кераміки!
            </p>
          </motion.div>{" "}
          <motion.div
            custom={14}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Подарунковий сертифікат</h3>
            <p className="text-lg text-brown">
              Що може бути кращим подарунком, ніж можливість відкрити для себе
              нові таланти та власні можливості? Сертифікат на майстер-клас з
              гончарства або ліпки, де кожен зможе втілити свої творчі задуми в
              реальність. Це не лише можливість провести час з користю, але й
              отримати задоволення від створення власних унікальних робіт. Такий
              подарунок залишить незабутні враження, розкриє творчий потенціал і
              надихне на нові творчі звершення.{" "}
              <span className="font-bold">Термін дії - 3 місяці</span>
            </p>
          </motion.div>{" "}
        </motion.div>
      </div>
      {/* 4 */}
      <div
        id="courses"
        className="flex flex-col w-[90%] md:w-[90%] 2xl:w-2/3 mx-auto"
      >
        <motion.h2
          custom={15}
          variants={itemVariants}
          className="mb-8 font-bold text-4xl text-brown"
        >
          Курси
        </motion.h2>
        <div className="flex-col md:space-y-0">
          <motion.div
            custom={16}
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3 className="font-semibold text-2xl">Курс «з 0 до Майстра»</h3>

            <p className="font-semibold text-xl">
              Тривалість: 10 занять (кількість днів на тиждень обговорюється
              особисто)
            </p>
            <p className="font-semibold text-xl">Вартість: 3675 грн</p>

            <p className="font-semibold text-xl">
              (запис щодня з 11.00 до 20.00)
            </p>
            <p className="text-lg text-brown">
              У нашому захоплюючому курсі &quot;з 0 до Майстра&quot; вас чекає
              10 захопливих занять, які занурять вас у світ гончарства та ліпки.
              Ми розпочнемо з основ, вивчаючи техніки гончарства та ліпки крок
              за кроком. Половина курсу буде присвячена гончарству, де ви
              навчитеся робити різноманітні посудини та інші вироби з глини за
              допомогою гончарного колеса та інструментів. Решта занять буде
              присвячена ліпці, де ви дізнаєтеся, як створювати унікальні
              скульптури та інші художні вироби своїми руками.
            </p>
            <p className="text-lg text-brown">
              На останньому занятті курсу ви матимете можливість виявити свою
              творчість та навички, створивши свій власний виріб з глини чи
              скульптуру. Цей виріб залишиться вам як невід&apos;ємна
              пам&apos;ять про ваші досягнення та творчий шлях.
            </p>
            <p className="text-lg text-brown">
              Після успішного завершення курсу ви отримаєте сертифікат про
              участь, який підтвердить ваші знання та навички в області
              гончарства та ліпки. Крім того, ви матимете можливість продовжити
              вдосконалювати свої навички, працюючи у нашій студії та
              використовуючи всі наявні ресурси та обладнання.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
