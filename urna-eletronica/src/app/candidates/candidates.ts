export interface Candidate {
  number: number;
  name: string;
  party: string;
  image: string;
  vice?: { name: string; image: string };
  substitutes?: { name: string; image: string }[];
}

export const federalDeputies: Candidate[] = [
  {
    number: 1234,
    name: "Bob Esponja",
    party: "Fenda do Biquini",
    image: '../../assets/images-candidates/bob.jpg'
  },
  {
    number: 5678,
    name: "Patrick Estrela",
    party: "Fenda do Biquini",
    image: "../../assets/images-candidates/patrick.jpg"
  }
];

export const stateDeputies: Candidate[] = [
  {
    number: 12345,
    name: "Mickey Mouse",
    party: "Disney",
    image: "../../assets/images-candidates/mickey.jpg"
  },
  {
    number: 67890,
    name: "Minnie Mouse",
    party: "Disney",
    image: "../../assets/images-candidates/minnie.jpg"
  }
];

export const senators: Candidate[] = [
  {
    number: 123,
    name: "Scooby-Doo",
    party: "Misterios S/A",
    image: "../../assets/images-candidates/scooby.jpg",
    substitutes: [
      { name: "Salsicha", image: "../../assets/images-candidates/salsicha.jpg" },
      { name: "Velma", image: "../../assets/images-candidates/velma.jpg" }
    ]
  },
  {
    number: 456,
    name: "Pernalonga",
    party: "Looney Tunes",
    image: "../../assets/images-candidates/pernalonga.jpg",
    substitutes: [
      { name: "Patolino", image: "../../assets/images-candidates/patolino.jpg" },
      { name: "Gaguinho", image: "../../assets/images-candidates/gaguinho.jpg" }
    ]
  }
];

export const governors: Candidate[] = [
  {
    number: 12,
    name: "Tom",
    party: "Gato e Rato",
    image: "../../assets/images-candidates/tom.jpg",
    vice: { name: "Jerry", image: "../../assets/images-candidates/jerry.jpg" }
  },
  {
    number: 34,
    name: "Popeye",
    party: "Espinafre",
    image: "../../assets/images-candidates/popeye.jpg",
    vice: { name: "Olivia Palito", image: "../../assets/images-candidates/olivia.jpg" }
  }
];

export const presidents: Candidate[] = [
  {
    number: 12,
    name: "Homer Simpson",
    party: "Springfield",
    image: "../../assets/images-candidates/homer.jpg",
    vice: { name: "Bart Simpson", image: "../../assets/images-candidates/bart.jpg" }
  },
  {
    number: 34,
    name: "Fred Flintstone",
    party: "Bedrock",
    image: "../../assets/images-candidates/fred.jpg",
    vice: { name: "Barney Rubble", image: "../../assets/images-candidates/barney.jpg"}
  }
];
