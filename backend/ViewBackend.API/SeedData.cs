using System.Net.Mime;
using ViewBackend.API.Constants;
using ViewBackend.API.Models;

namespace ViewBackend.API;

public class SeedData
{
    public static async Task SeedDataAsync(ApplicationContext context, IWebHostEnvironment environment)
    {
        await SeedUserAsync(context);
        await SeedStoriesAsync(context, environment);
    }

    private static async Task SeedUserAsync(ApplicationContext context)
    {
        var user = new User
        {
            Username = "user",
            Password = "1111",
        };

        if (!context.Users.Any(_ => _.Username == user.Username && _.Password == user.Password))
        {
            await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
        }
    }

    private static async Task SeedStoriesAsync(ApplicationContext context, IWebHostEnvironment environment)
    {
        var stories = new Story[]
        {
            new Story
            {
                Country = "CHILE",
                Title = "Patagonia",
                Subtitle = "CONTINENT'S END",
                FullText =
                    "Национальный парк Торрес-дель-пайне занимает более 181 000 гектаров региона Магальянес, самого большого, южного и малонаселенного из 16 административных подразделений Чили. Три ‘башни\" хребта — Торрес д'агостини, Торрес сентрал и Торрес монзино — возвышаются над цепочкой озер, включая озеро Грей, озеро Пехоэ и озеро Норденшельд, а также над ледниками с серым языком южных ледяных полей. Более пятой части территории Чили находится в границах 41 национального парка, и Торрес-дель-пейн является одним из его крупнейших и наиболее посещаемых.",
                ShortText =
                    "Суровый дикий край с узкими реками и фьордами, с крутыми склонами и обрывистыми горами, ледниковыми долинами, продуваемыми холодными ветрами. Здесь находятся такие чудеса природы, как гранитные башни в Национальном парке Торрес дель Пайне, Национальный парк Лос-Гласьярес с огромными ледниками, разноцветными осадочными породами и потрясающей красоты изумрудными озерами и реками.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/travel1Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/travel1firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/travel1secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/travel1.jpg"),
                Type = StoryTypes.Travel
            },
            new Story
            {
                Country = "JAPAN",
                Title = "Amidst the Pines",
                Subtitle = "RITSURIN GARDEN",
                FullText =
                    "На площади 16 гектаров шесть безмятежных прудов колышутся под легким ветерком, перемежаясь с тринадцатью ландшафтными холмами и насыпями. На этих возвышенностях растут нежные кустарники и высокая трава, покрытые лишайником камни и карликовые сосны. Сад, cозданный в период Эдо, привлекает жителей близлежащего города Такамацу и гостей со всего мира, чтобы насладиться его флорой и идиллическим чайным домиком. 300-летние сосны возле Хокко растут в стиле бонсай. До сосен и пальм, кленов и сливовых деревьев можно добраться по дугообразным мостам. В пруду водятся карпы кои. Чайный домик Кикугецу-тей переводится как \"Павильон для сбора луны\", в честь китайского стихотворения эпохи Тан, в котором описывается, как зачерпывают воду, чтобы удержать отражение осенней луны. Коврики-татами выложены поверх потертого дерева, на которых вы можете посидеть и полюбоваться спокойным прудом Нанко с чашкой матча.",
                ShortText =
                    "Посещение сада Рицурин периода Эдо и чайного домика Кикугецу-тей, недалеко от Такамацу, Япония.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/travel2Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/travel2firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/travel2secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/travel2.jpg"),
                Type = StoryTypes.Travel
            },
            new Story
            {
                Country = "ARCHITECTURE | LOS ANGELES",
                Title = "Hollyhock House",
                Subtitle = "FRANK LLOYD WRIGHT",
                FullText =
                    "Возвышающийся на вершине Оливкового холма в парке искусств Барнсдолл, словно корона, дом Фрэнка Ллойда Райта \"Холлихок Хаус\" сияет камнем медового цвета. Построенное между 1919 и 1921 годами для Алины Барнсдолл, здание было удостоено статуса Всемирного наследия ЮНЕСКО в 2019 году. В нем присутствуют многие классические архитектурные особенности Ллойда Райта, такие как огромные окна, жилое пространство открытой планировки, смелые линии и геометрические акценты. Архитектурные формы майя украшают стены, начиная с многочисленных террас на крыше и заканчивая внутренним двориком.",
                ShortText =
                    "Культовый центр парка искусств Барнсдолл в Лос-Анджелесе, этот бывший дом, спроектированный Фрэнком Ллойдом Райтом, в настоящее время является объектом всемирного наследия ЮНЕСКО.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/design1Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/design1firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/design1secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/design1.jpg"),
                Type = StoryTypes.Design
            },
            new Story
            {
                Title = "Understanding",
                Subtitle = "BOSCO SODI AND CASA WABI",
                FullText =
                    "На тихоокеанском побережье Оахаки бетонная стена проходит через песок и кустарник на протяжении 312 метров. Стена укрывает маленькие деревянные хижины и встречается с большими открытыми сооружениями с бетонными стенами и соломенными крышами из сплетенных пальмовых листьев. В центре находится самое большое сооружение, где терраса проходит перпендикулярно побережью, а геометрические бассейны разделяют дорожку. Здания площадью 27 гектаров окружены местными деревьями и цветами, а сады усеяны павильонами, художественными инсталляциями и другими сооружениями.\n" +
                    "Это Дом Ваби, художественный фонд, основанный мексиканским художником и скульптором Боско Соди и построенный Тадао Андо в 2014 году. Начинающих международных художников приглашают сюда на резиденции, где им предлагается поработать над проектом с одним из местных сообществ.",
                ShortText =
                    "Художественный фонд, основанный мексиканским художником и скульптором Боско Соди и построенный Тадао Андо.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/design2Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/design2firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/design2secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/design2.jpg"),
                Type = StoryTypes.Design
            },
            new Story
            {
                Title = "Iconic Forms",
                Subtitle = "EMBLEMS OF CARTIER’S HERITAGE",
                FullText =
                    "Точные формы и драгоценные металлы сходятся воедино. Золотые линии контрастируют с обтекаемостью кожаного ремешка, складки мягкого хлопчатобумажного бархата соприкасаются с холодной сталью. Гладкий овоид повторяет изгибающийся кончик воскового листа. Часы обволакивают прохладное прикосновение камешка, круглого, как луна.\n" +
                    "Эти формы, линии и материалы составляют некоторые из самых знаковых произведений искусства Cartier. В этой коллекции представлены четыре модели часов и три ювелирных изделия за 174-летнюю историю, созданные Луи Картье на рубеже 20–го века и нью-йоркским дизайнером ювелирных изделий Альдо Чипулло - единственным дизайнером на сегодняшний день, которому разрешено подписывать свое имя рядом с логотипом Cartier.",
                ShortText =
                    "Исследование некоторых из самых знаковых произведений Cartier за 174-летнюю историю.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/style1Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/style1firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/style1secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/style1.jpg"),
                Type = StoryTypes.Style
            },
            new Story
            {
                Title = "The Row, London",
                Subtitle = "FASHION",
                FullText =
                    "Дом 15 по адресу Carlos Place, Mayfair. Это место встречи стиля, искусства и дизайна включает в себя новый лондонский магазин The Row, который открылся в сентябре 2019 года как первый европейский аванпост бренда. Пространство сочетает изысканное размещение предметов роскошной линии одежды Мэри-Кейт и Эшли Олсен с сочетанием произведений современного искусства и мебели середины века. Кожаные сумки расставлены на постаментах, а вдоль одной стены складки кашемира, шифона и шерсти, вырезанные в виде элегантных пальто, джемперов и блузок, приглашают к прикосновению. Cправа в стеклянных витринах выставлены солнцезащитные очки, созданные в сотрудничестве с Oliver Peoples, а изящные серьги из золота и бриллиантов от Ana Khouri сверкают в витринах вдоль стены. Дизайн коллекции AW 2019 был вдохновлен французской мебелью в стиле модерн; одежда сочеталась с иконами середины века, особенно французскими, с элементами декоративно-прикладного искусства, ар-деко и ар-нуво. Фирменные оттенки бренда - черный, темно-синий и серый.",
                ShortText =
                    "Новый магазин The Row в Мейфэре, Лондон, где коллекции бренда представлены наряду с избранными произведениями современного искусства и культовым дизайном середины века.",
                MainImage = GetBase64ByImagePath(environment, "card-full-info/style2Main.jpg"),
                FirstAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/style2firstAdditional.jpg"),
                SecondAdditionalImage = GetBase64ByImagePath(environment, "card-full-info/style2secondAdditional.jpg"),
                PreviewImage = GetBase64ByImagePath(environment, "news-area/style2.jpg"),
                Type = StoryTypes.Style
            }
        };

        if (!context.Stories.Any())
        {
            await context.Stories.AddRangeAsync(stories);
            await context.SaveChangesAsync();
        }
    }

    private static string GetBase64ByImagePath(IWebHostEnvironment environment, string imagePath)
    {
        var path = Path.Combine(environment.WebRootPath, $"img/{imagePath}");

        var imageArray = File.ReadAllBytes(path);
        var base64ImageRepresentation = "data:image/jpeg;base64," + Convert.ToBase64String(imageArray);

        return base64ImageRepresentation;
    }
}