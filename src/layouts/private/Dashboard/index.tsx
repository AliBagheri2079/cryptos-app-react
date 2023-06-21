import { Container, Grid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, type ReactNode } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TabBar from '../TabBar';
import { BASE_COL_HEIGHT } from '@/utils/constants/colHeight';

type Props = {
  children: ReactNode;
};

const Dashboard: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();

  // TODO: Create many utils size matches
  const mobileSizeMatches = useMediaQuery(
    `(max-width: ${theme.breakpoints.sm})`,
  );

  return (
    <>
      <Container
        fluid
        p={{
          base: 'xs',
        }}
        px={{
          sm: 'md',
        }}
        py={{
          sm: 'xl',
        }}
      >
        <Grid grow justify='space-between'>
          <Grid.Col
            sm='auto'
            mih={BASE_COL_HEIGHT.FOURTH}
            order={2}
            orderSm={1}
          >
            {mobileSizeMatches ? <TabBar /> : <Sidebar />}
          </Grid.Col>

          <Grid.Col sm={8} order={1} orderSm={2}>
            <Grid grow gutter='md' gutterLg='xl'>
              <Grid.Col span={12} mih={BASE_COL_HEIGHT.FIRST}>
                <Header />
              </Grid.Col>

              <Grid.Col span='auto' mih={BASE_COL_HEIGHT.SECOND}>
                {children}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur ad officiis repudiandae in cumque ipsa distinctio
                tenetur sapiente placeat. In expedita, aliquid fuga aliquam rem
                alias beatae adipisci repudiandae exercitationem perferendis
                recusandae dolores voluptate ullam odit pariatur, totam soluta
                nihil natus! Sequi amet ipsam molestias a quae nisi aliquam quod
                nesciunt odio odit animi exercitationem consequuntur laborum
                sint eius deleniti ducimus quo non, ullam, deserunt autem.
                Repudiandae mollitia, commodi, porro ut sed sequi iusto fuga eos
                sapiente magni, molestias delectus temporibus? Exercitationem a
                soluta minima autem sed itaque maxime consequatur quos nostrum
                voluptates, ex reprehenderit earum, ratione nulla consequuntur
                provident sint temporibus consectetur? Modi laudantium
                voluptates voluptate asperiores vel fugit, alias culpa optio sit
                cumque. Distinctio iure repellendus, in amet molestias tempora
                autem dolore obcaecati perspiciatis expedita, omnis debitis
                possimus doloribus quo tempore praesentium cum? Repellendus
                mollitia sequi hic aspernatur debitis atque quam excepturi,
                suscipit omnis id iste, tempora, dolore impedit ducimus voluptas
                laboriosam consequuntur soluta perferendis labore. Laborum
                recusandae distinctio praesentium! Ad, culpa sunt odit esse
                dicta sapiente temporibus quam consequatur quidem eos adipisci
                ea minus ex explicabo enim tempore! Sapiente sequi ipsam
                excepturi magnam temporibus fuga, repellat soluta natus
                voluptatibus? Provident ipsa dolorem quae laborum fugit sunt
                voluptatibus eaque. Culpa provident eius perferendis similique
                explicabo vero quas repudiandae perspiciatis eaque ea tempore
                natus in molestias quisquam consectetur, suscipit reprehenderit,
                dolorum omnis praesentium. Alias exercitationem natus inventore
                eaque corrupti a perferendis earum eveniet autem quaerat
                accusamus provident voluptate nesciunt sequi aliquid excepturi
                hic temporibus voluptatibus quas, tempora harum rerum. Expedita
                officia laborum corporis laboriosam maiores quibusdam nisi
                labore, hic commodi quidem vero dolore, quia porro voluptatem
                consequuntur dignissimos totam vel libero sunt, magnam
                exercitationem. Adipisci deleniti debitis optio error tempore
                maiores ratione sunt itaque fugiat sapiente tempora magni earum
                fuga ipsam dicta exercitationem facere dignissimos laboriosam
                odio magnam, facilis soluta hic. Hic accusamus, quisquam aut
                sequi facere, culpa impedit illo aperiam dignissimos repudiandae
                assumenda similique tempora eaque qui odio delectus et. Delectus
                unde quaerat fugiat non pariatur ut inventore laborum
                accusantium dolorum obcaecati est commodi reprehenderit
                voluptatem magni reiciendis ea, in quidem aliquam at omnis
                perspiciatis dignissimos nostrum sunt? Ullam molestias minus
                iste repudiandae sunt reiciendis recusandae odit et vitae
                similique provident, assumenda blanditiis aperiam quo iure
                facere adipisci ipsa nisi sed nihil tenetur soluta. Voluptates
                suscipit nemo odit, neque sint maiores consequuntur nihil
                laboriosam ea iste excepturi corrupti amet delectus omnis sit
                accusamus blanditiis. Facere minima autem explicabo itaque ad
                illum libero iste et cupiditate, blanditiis, eius ipsa nam enim
                architecto iusto? Quibusdam iste quas, odit nihil, vero tenetur
                suscipit voluptatem neque assumenda natus, aperiam recusandae
                possimus veniam accusantium. Minus quae distinctio, animi sunt
                illum repellendus! Eum, adipisci molestiae quos animi ex,
                accusamus odit fugit eaque, voluptates nostrum voluptatibus?
                Quos, nulla blanditiis praesentium rem placeat voluptas delectus
                quia. Aut deserunt doloremque nulla, voluptas beatae iusto
                placeat tenetur odit aspernatur quidem. Excepturi aliquid quasi
                quam. Sint, enim? Ipsa, exercitationem nam? Excepturi soluta
                velit ex exercitationem voluptates totam error voluptatibus
                omnis mollitia beatae! Aliquid at perferendis quia dicta beatae
                molestias perspiciatis repellat sit labore magnam pariatur
                doloribus, ipsum officia iste nobis non ad! Accusamus
                repellendus ipsa explicabo et asperiores, id nostrum maxime ex
                tempora eaque delectus ea nulla numquam dolores illo odio.
                Sapiente repellat quod eius rerum, officia est non recusandae
                quisquam ex ipsa perspiciatis. Veritatis atque soluta, cum
                necessitatibus illum deserunt unde? Accusamus sapiente est nam
                itaque dolorum possimus quos soluta alias nisi quam a eos
                eveniet excepturi atque, officiis cum praesentium aliquam!
                Pariatur molestias accusamus odio totam beatae error, commodi
                impedit, numquam deleniti possimus delectus ipsam neque
                blanditiis dicta deserunt obcaecati dolorem nisi quaerat. Iusto
                cumque architecto rerum asperiores similique consequatur earum.
                Sequi vitae ad est quidem beatae necessitatibus praesentium
                facilis recusandae repellat odio esse rem ex illo dicta aliquam
                atque ullam, accusamus ipsum repudiandae molestiae nisi tempora
                eos cum natus! Perferendis minus sit dolorem facilis iste rem,
                voluptatem odio quaerat libero, fugiat repellat quae recusandae
                itaque, iusto vero nisi officia blanditiis! Ea ex facilis ipsam
                culpa amet deserunt assumenda quisquam praesentium placeat
                facere? Voluptate nobis dicta aperiam quo at illo ad ea? Qui ut
                repudiandae minus autem fugit optio fugiat nobis? Quam at
                aperiam placeat qui odio ipsam quibusdam neque eligendi harum
                voluptates nulla perferendis necessitatibus eveniet deserunt
                hic, perspiciatis facilis cupiditate dolor, delectus culpa porro
                dolores quis! Laborum libero, velit soluta iusto ad dolorem ex
                quis quod inventore sint! Nesciunt voluptatem optio quisquam
                corrupti iusto est repudiandae, labore aut asperiores nulla
                molestias provident. Dolor sint vel itaque. Minima unde
                praesentium fuga nemo quia quo esse velit soluta consequatur
                sint necessitatibus asperiores in, fugiat deleniti laudantium
                sapiente, omnis beatae perferendis? Quaerat minima iure eligendi
                eaque ducimus voluptatibus blanditiis consequatur incidunt
                suscipit optio aliquid quia, necessitatibus accusantium
                laboriosam fugit quas earum nam? Officia ad accusamus esse rem,
                modi odit temporibus illum corporis reprehenderit explicabo amet
                deleniti quos, voluptatem nostrum consectetur, ipsum maiores
                sunt dicta voluptate. Nihil eaque delectus, provident dolore
                minus similique expedita temporibus, blanditiis cumque
                dignissimos saepe placeat fugiat pariatur laborum tenetur
                voluptatem distinctio magni natus, labore ipsam nemo repellat
                quos? Illum, dolorum optio mollitia consequuntur quod fugiat
                nulla nihil repellendus minima veritatis architecto! Architecto
                voluptatem doloremque iusto explicabo corrupti aspernatur,
                veniam, repudiandae odio numquam iste tempore? Quibusdam a est
                officiis quis porro deleniti doloribus eos minima et itaque
                obcaecati deserunt recusandae nemo at, unde accusamus repellat
                impedit quisquam libero, incidunt fuga repudiandae illo
                consequuntur! Nobis amet, quam recusandae fugiat sunt
                accusantium voluptatem accusamus ipsa atque labore.
                Reprehenderit, perferendis. Eum, maiores minus laborum
                praesentium temporibus maxime illum, voluptas natus, ea aliquam
                dolor officiis aperiam deserunt? Ad eius molestias laudantium,
                explicabo sit impedit magni provident error sequi, quaerat odit.
                Fuga, odit numquam? Fugit natus consequuntur sint dolor quos
                molestiae nisi inventore sed corrupti, ex alias recusandae
                repellendus sit eos iure voluptatum aspernatur saepe rerum nam!
                Doloribus voluptatem consequatur ut beatae, autem ullam vero
                quaerat, saepe omnis quas tenetur corrupti natus sit minus
                labore obcaecati! Nihil nulla amet, tenetur obcaecati mollitia
                quod consequuntur. Excepturi, provident reiciendis fugit
                consequuntur repudiandae neque optio dolorum deleniti doloremque
                aliquid eius sequi necessitatibus rem alias debitis veritatis
                aperiam consectetur voluptas. Sint cupiditate, tenetur
                consequatur molestiae aut minima vitae eum debitis, unde
                reiciendis veniam earum, iusto aperiam. Culpa tempora, nostrum
                at minus mollitia ad esse ipsum cum necessitatibus error unde
                quae provident repellat sapiente, corrupti assumenda quis
                dolore, atque temporibus consectetur aspernatur ducimus saepe
                perspiciatis dicta. Quas nobis rerum incidunt, esse amet magnam
                voluptate tempora perferendis accusamus, fugit ex facilis
                quisquam necessitatibus officiis architecto autem ratione in
                eveniet dolores nisi blanditiis, dolorem culpa deserunt. Sit rem
                aut error provident sequi dicta iusto labore eveniet repellendus
                commodi, sint explicabo aliquam unde voluptatum fugit, delectus
                nemo architecto dolorem aspernatur quis ut quae expedita.
                Laborum labore reiciendis rem eos error consectetur. Accusamus
                cum obcaecati maxime atque rem. Quo fuga amet corporis. Rerum
                amet soluta, dicta fugiat pariatur aspernatur minima neque iste,
                quaerat aperiam sit vitae minus maiores, officia aliquid error
                atque reprehenderit modi laboriosam deleniti voluptatum et sequi
                qui maxime? Omnis dolore odio ad soluta, veritatis maxime at
                consectetur doloremque, temporibus rerum dolor exercitationem
                delectus. Maxime voluptates deleniti consequatur perspiciatis
                sint libero magnam veritatis ipsa architecto. Reiciendis nisi
                quaerat a quis optio hic incidunt maxime perspiciatis laboriosam
                itaque harum dolorum veniam, magnam aut! Possimus consequuntur
                ducimus ipsam sapiente in at atque cumque earum maxime.
                Voluptatum nesciunt fugit amet, hic vel odit voluptatem debitis
                saepe delectus consequatur voluptates iure quisquam voluptas
                labore sunt dolore recusandae velit tempore facilis, vitae
                quibusdam rerum esse placeat deleniti? Incidunt, minima.
                Laboriosam facere odit voluptas nulla consequuntur distinctio
                maxime. Error accusamus ea dolor fugiat aliquam similique culpa
                a numquam corrupti iusto quia architecto, obcaecati est non
                omnis assumenda cumque placeat et laboriosam minima vero optio
                asperiores. Tempora quisquam laudantium placeat molestiae
                officiis, beatae repellat aliquid, ex quia accusantium provident
                assumenda veniam omnis distinctio atque est laboriosam? Esse
                quibusdam mollitia, cumque deleniti ratione itaque dolor sint
                quis velit saepe distinctio dicta sed veniam vel in? Voluptate
                praesentium sit asperiores inventore, dolorem vel fuga.
                Aspernatur soluta incidunt dolore, earum dignissimos neque
                facilis? Laboriosam provident, maiores eius fugiat magnam maxime
                aliquid quaerat, repellendus tempore delectus fugit fuga culpa
                rem voluptatibus modi minima ea voluptatum aperiam, odio dolorum
                quod. Aspernatur voluptate ullam voluptatum praesentium quo iure
                blanditiis exercitationem eveniet magni incidunt maxime culpa
                provident, suscipit dolores commodi modi voluptatibus animi
                ipsam quod necessitatibus laborum aliquid reprehenderit ad!
                Numquam nesciunt, nemo maxime veritatis alias beatae deleniti
                qui iusto voluptatibus esse assumenda expedita laboriosam
                voluptas est praesentium fugiat ipsum odit labore. Culpa facere,
                consequatur saepe ducimus autem blanditiis atque maiores
                voluptatem reiciendis rerum voluptatibus adipisci natus sapiente
                voluptas hic aliquam, doloribus assumenda consequuntur alias sit
                eum itaque illo. Adipisci dolor rem earum necessitatibus
                distinctio consectetur illum deleniti ea quibusdam voluptates
                vel veniam odit delectus facilis ut est quas unde, officiis
                dolores, iure nihil cupiditate ipsa doloribus. Saepe ducimus
                ipsam eius assumenda sapiente voluptatibus alias rem eligendi
                nemo vel provident quia, earum ex ad vero corporis impedit neque
                beatae quos nulla ipsa architecto? Repudiandae est odit modi
                voluptatibus vitae iste nisi unde possimus! Mollitia blanditiis
                atque sed praesentium iure dicta, fuga assumenda ipsa quia
                delectus, nesciunt qui facilis reprehenderit perspiciatis magnam
                eaque quisquam distinctio quas, dolor necessitatibus a nobis
                quod. Dicta eligendi quam, sunt quibusdam molestias ipsa
                voluptas non! Cum eum officiis, atque reiciendis alias aliquid
                molestias maxime nihil illo nostrum, exercitationem veniam
                tempore voluptatem aperiam unde impedit, deleniti dolores
                placeat iste aliquam sunt excepturi. Natus tempora cum laborum
                veniam cumque eaque itaque tenetur nostrum quam, aliquam
                possimus veritatis at nemo praesentium ab error corrupti,
                deserunt adipisci consequuntur fugiat excepturi hic perferendis?
                Provident magni animi praesentium beatae, obcaecati quas dolore,
                qui, hic non ipsum nemo nulla? Maxime harum, ipsam perspiciatis
                sunt animi neque non voluptate deserunt. Nobis eum repellendus
                magnam doloremque laboriosam accusamus quis! Aliquid vero illum,
                debitis minus sit ad dolorem ipsum ipsam tempore eveniet facere
                quidem, excepturi culpa, commodi impedit dolores architecto
                maxime! Eligendi magni aliquam totam pariatur libero facere
                ducimus nobis illo dicta. Numquam ea, veritatis blanditiis modi
                cupiditate enim dolores. Cupiditate quos cumque soluta ab.
                Minima nam ducimus nihil corrupti veritatis et iusto animi
                temporibus illum perferendis. Perferendis porro omnis atque
                facere repudiandae animi impedit obcaecati cupiditate ea vitae
                magni minima neque in blanditiis, quis perspiciatis voluptate
                aliquam a placeat accusamus eum hic aliquid. Reiciendis earum
                recusandae necessitatibus minus, esse illum a id odit quam,
                nulla at rerum iste cupiditate ducimus quasi dolorum enim? Eius
                dolorum commodi illo sapiente ipsa veritatis amet cumque velit
                quod dolore inventore doloremque eos cum obcaecati rem sint
                pariatur doloribus eum, ratione earum consectetur odit. Iure
                molestias maiores nostrum laboriosam sapiente incidunt
                consequatur modi ex distinctio, impedit soluta esse ea minima
                doloremque doloribus. Facilis, fugit laborum. Explicabo, quaerat
                voluptas dolor molestiae nisi incidunt nesciunt. Quisquam, harum
                consequatur eaque nulla aliquam dolore! Consequuntur velit
                nostrum dicta quod eaque consectetur sequi suscipit voluptates
                dolores, corporis quo quis ad odit nulla vel dolor libero
                incidunt deleniti, mollitia non, eius repudiandae illum? Optio
                distinctio doloribus maiores. Blanditiis natus, expedita cumque
                repellat fugit porro itaque? Sit, odit quos voluptate ducimus
                possimus fugiat soluta, quasi, explicabo in neque distinctio
                corrupti. Voluptatem facilis quis officia beatae tempore
                asperiores laborum distinctio soluta voluptas. Qui sunt ullam
                debitis eveniet repellendus nam quidem cupiditate maxime, eaque
                ad explicabo suscipit saepe, ratione doloribus ipsum magnam
                facere minima amet eligendi ex quibusdam labore inventore
                placeat? Ad obcaecati totam incidunt saepe, iure reprehenderit,
                natus ratione numquam officiis dolorem corrupti distinctio sequi
                ab consectetur doloremque quia quis cumque nemo rem ipsam
                perferendis? Quae doloremque voluptatem modi est molestias esse
                deleniti sequi facere ex alias unde, sit facilis dolores odio
                quisquam velit laudantium perferendis hic vel autem? Nostrum,
                officia. Ab odit, maxime voluptate accusantium soluta iusto
                numquam quae culpa, consequatur architecto unde voluptatibus
                magni eveniet error? Quas suscipit vero illum repellat aliquam
                sequi, obcaecati hic consequuntur commodi quisquam. Dignissimos
                nesciunt eos, aspernatur possimus placeat cumque labore. Magnam
                ut nihil laboriosam ipsa sunt ipsum blanditiis est perspiciatis
                numquam? Tempora, a iste. Consequuntur, sapiente consectetur
                exercitationem debitis alias molestiae autem odio accusamus
                minus. Id, tempora iure, et fuga praesentium recusandae minus
                numquam hic blanditiis ipsam esse tempore quas dolores!
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
