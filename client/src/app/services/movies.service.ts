import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

  constructor() { }

  public getAllMovies(): any {
    const array = [
      {
        "id": "5c18c4ec8e29b63b44bdcb10",
        "name": "magna",
        "year": 2000,
        "genre": "Action",
        "about": "Mollit dolor cupidatat veniam nostrud reprehenderit irure. Nulla in incididunt pariatur pariatur laborum qui excepteur occaecat minim pariatur anim. Anim proident commodo est veniam excepteur fugiat. Ut quis dolor nostrud adipisicing nostrud in. Magna mollit pariatur irure officia esse consequat voluptate consequat sint ut anim fugiat velit nisi.\r\n"
      },
      {
        "id": "5c18c4ece741605fde3fce78",
        "name": "commodo",
        "year": 1999,
        "genre": "Action",
        "about": "Consectetur non sit dolore Lorem duis qui ipsum exercitation reprehenderit velit nisi non labore incididunt. Et nostrud sunt non voluptate esse consectetur laboris anim non consectetur ullamco amet. Sint irure deserunt nostrud officia cupidatat aute id laboris sit. Dolor incididunt eu nisi laboris dolore eu consequat irure.\r\n"
      },
      {
        "id": "5c18c4ecc2e2ecab205ffee0",
        "name": "quis",
        "year": 2004,
        "genre": "Thriller",
        "about": "Mollit enim enim aliquip adipisicing duis. Mollit aute irure proident aliquip deserunt ullamco magna officia eiusmod duis incididunt. Lorem culpa ea aute pariatur anim mollit minim occaecat sint aliqua consequat enim. Quis occaecat exercitation ut minim elit elit aliqua esse aute nisi.\r\n"
      },
      {
        "id": "5c18c4ec88cea4b8614ac0e6",
        "name": "qui",
        "year": 1990,
        "genre": "Thriller",
        "about": "Qui Lorem commodo ullamco non adipisicing. Ipsum tempor pariatur incididunt elit eu laboris. Esse nostrud in amet ipsum consectetur qui culpa anim dolor anim adipisicing do ad ut. Exercitation nulla aute aliquip pariatur officia do tempor pariatur tempor nulla magna. Ea quis exercitation incididunt qui. Sit ad sunt duis id sint. Anim id quis id ullamco eu sit deserunt deserunt.\r\n"
      },
      {
        "id": "5c18c4ecc35ed4f94372e30d",
        "name": "quis",
        "year": 1995,
        "genre": "Drama",
        "about": "In nisi cillum labore fugiat esse aliqua ad do eiusmod sit sunt sit aute. Officia occaecat occaecat tempor incididunt sit pariatur fugiat sit. Aliquip fugiat fugiat ex commodo incididunt dolor id aliqua aliqua qui aliqua cillum aliqua sit. Labore adipisicing ipsum incididunt voluptate cupidatat laboris culpa pariatur proident proident qui officia. Elit ad nulla duis eu dolore ex consequat exercitation pariatur exercitation excepteur sunt nisi nisi.\r\n"
      },
      {
        "id": "5c18c4ecf3179206a74b244e",
        "name": "ullamco",
        "year": 2005,
        "genre": "Action",
        "about": "Irure voluptate minim qui mollit occaecat proident cillum eiusmod sint. Duis minim magna occaecat voluptate irure ea ipsum ea ipsum consectetur nulla. Cupidatat et eiusmod labore aliqua incididunt dolore nisi ex. Qui dolor deserunt cillum elit eu eu cillum laborum qui ad. Elit enim magna aute tempor veniam labore duis non. Est quis proident quis adipisicing cupidatat incididunt deserunt labore non.\r\n"
      },
      {
        "id": "5c18c4ec5ae1fc76a97b01c6",
        "name": "occaecat",
        "year": 2016,
        "genre": "Thriller",
        "about": "Deserunt magna culpa exercitation laborum non elit incididunt eu. Incididunt ut laboris laboris aute eu officia consequat sint do. Culpa velit minim minim officia ex est laborum ad tempor. Proident quis ea sint elit mollit eiusmod pariatur exercitation voluptate enim elit proident. Duis velit duis nisi laboris ea labore culpa reprehenderit magna sint voluptate. Ea aute ullamco consectetur exercitation fugiat consequat pariatur mollit.\r\n"
      },
      {
        "id": "5c18c4eca38737a196ce55cc",
        "name": "id",
        "year": 2011,
        "genre": "Drama",
        "about": "Mollit id in adipisicing elit id. Cupidatat non consequat esse duis exercitation sunt ullamco deserunt Lorem tempor amet eu ex laborum. Aliquip minim proident eu ut ipsum consectetur adipisicing anim cupidatat in est incididunt sunt. Ut magna minim ut pariatur.\r\n"
      },
      {
        "id": "5c18c4ec04f074d711667d56",
        "name": "occaecat",
        "year": 2016,
        "genre": "Adventure",
        "about": "Incididunt irure laboris tempor in pariatur aute. Non aliquip minim ad ex qui elit irure labore reprehenderit esse Lorem. Nostrud fugiat consectetur duis duis.\r\n"
      },
      {
        "id": "5c18c4ec68635bc89613a0f3",
        "name": "quis",
        "year": 2014,
        "genre": "Adventure",
        "about": "Commodo adipisicing id enim aliqua ea veniam. Mollit anim fugiat ad anim exercitation laboris amet elit culpa. Excepteur et anim laboris labore dolore est fugiat est in nostrud magna. Aliqua anim Lorem mollit fugiat.\r\n"
      },
      {
        "id": "5c18c4ec7312f0bcc1e194f3",
        "name": "enim",
        "year": 1994,
        "genre": "Horror",
        "about": "Lorem aliquip qui nisi consectetur ad minim laboris veniam veniam ex et. Sit esse do culpa veniam cillum excepteur anim. Duis cillum amet dolore do minim labore cupidatat sunt deserunt irure aliqua dolore eu. In dolore incididunt magna culpa minim nulla.\r\n"
      },
      {
        "id": "5c18c4ec61b2fdcb438bf953",
        "name": "aliqua",
        "year": 2013,
        "genre": "Action",
        "about": "Laboris qui ut ea labore nisi nostrud exercitation deserunt ad. Sit id aliqua proident mollit culpa ex amet sint quis. Eiusmod nulla ad sint nulla et proident. Est id commodo adipisicing quis dolore. Anim ex enim veniam ut ad aliquip duis reprehenderit magna enim nisi exercitation eu esse. Magna officia quis laboris do sint. Ex Lorem do nisi nostrud ullamco et.\r\n"
      },
      {
        "id": "5c18c4ec8990471e03590510",
        "name": "aliquip",
        "year": 2010,
        "genre": "Horror",
        "about": "Magna anim commodo voluptate officia aliquip qui anim. Ex cupidatat non sunt et sint pariatur. Duis id magna sunt mollit reprehenderit. Enim minim veniam ea dolore esse occaecat. Aute adipisicing ea occaecat esse anim enim excepteur voluptate aliquip occaecat cupidatat ullamco.\r\n"
      },
      {
        "id": "5c18c4ec0ecfa1128ff1d6f3",
        "name": "eiusmod",
        "year": 2006,
        "genre": "Fantasy",
        "about": "Culpa qui adipisicing adipisicing cupidatat ex amet laborum culpa. Dolor duis proident excepteur duis pariatur in. Cupidatat duis et exercitation pariatur elit consequat proident sint dolor cupidatat labore amet aute. Aliqua dolore in esse adipisicing proident aute irure in sit sit sit ea quis nisi. Excepteur dolore fugiat exercitation officia est laborum non. Proident reprehenderit proident labore tempor ut ut fugiat anim culpa enim. Laboris mollit fugiat nisi commodo ea mollit irure laborum laborum labore non.\r\n"
      },
      {
        "id": "5c18c4ec6d731f5494da33a6",
        "name": "excepteur",
        "year": 1995,
        "genre": "Drama",
        "about": "Dolor laborum amet aliqua id cupidatat dolor est magna duis nisi. Deserunt eu excepteur labore aliquip do pariatur et adipisicing consequat. Et exercitation ex laboris ut amet cillum ad do dolore laboris commodo. Commodo amet non adipisicing mollit ullamco amet aute minim culpa aliqua in irure.\r\n"
      }
    ];
    return array;
  }

}
