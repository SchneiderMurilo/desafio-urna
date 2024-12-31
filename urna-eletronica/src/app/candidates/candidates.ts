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
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F2.jpg?alt=media&token=3a03be58-7351-4d6b-8a65-8e8321c49603"
  },
  {
    number: 5678,
    name: "Patrick Estrela",
    party: "Fenda do Biquini",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F8.jpg?alt=media&token=f2750121-b289-4f78-b2ca-2af882eeebb9"
  }
];

export const stateDeputies: Candidate[] = [
  {
    number: 12345,
    name: "Mickey Mouse",
    party: "Disney",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F6.jpg?alt=media&token=ad323a11-0718-486e-a167-0d59bea1f645"
  },
  {
    number: 67890,
    name: "Minnie Mouse",
    party: "Disney",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2FDesign%20sem%20nome.jpg?alt=media&token=cf03a27a-602f-4d4d-96d7-9e5efec7093a"
  }
];

export const senators: Candidate[] = [
  {
    number: 123,
    name: "Scooby-Doo",
    party: "Misterios S/A",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F12.jpg?alt=media&token=7c3f775e-b395-4fa3-8dc3-282510f3ffb8",
    substitutes: [
      { name: "Salsicha", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F13.jpg?alt=media&token=c345829d-5a9e-40c9-8143-a4cb56af5f3f" },
      { name: "Velma", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F14.jpg?alt=media&token=81088f0b-c62f-48b6-b632-f464cd37399d" }
    ]
  },
  {
    number: 456,
    name: "Pernalonga",
    party: "Looney Tunes",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F9.jpg?alt=media&token=b943bb65-b1f2-4ca7-ab47-109e34b52e85",
    substitutes: [
      { name: "Patolino", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F7.jpg?alt=media&token=e2f2c19c-676a-432e-af58-d0636f214671" },
      { name: "Gaguinho", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F1.jpg?alt=media&token=679e1ef4-aec6-4724-9211-f0fcd2beedc6" }
    ]
  }
];

export const governors: Candidate[] = [
  {
    number: 12,
    name: "Tom",
    party: "Gato e Rato",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F3.jpg?alt=media&token=477a19b7-18c4-4658-8195-824e8419d72f",
    vice: { name: "Jerry", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F5.jpg?alt=media&token=eba57c00-5f3c-4e55-b5a2-bf27ca9ed9f5" }
  },
  {
    number: 34,
    name: "Popeye",
    party: "Espinafre",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F10.jpg?alt=media&token=535c4e43-efa0-4d63-beba-6faa26bffcad",
    vice: { name: "Olivia Palito", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F11.jpg?alt=media&token=fbdb18cc-9c8a-41a4-b1bc-a03956184752" }
  }
];

export const presidents: Candidate[] = [
  {
    number: 12,
    name: "Homer Simpson",
    party: "Springfield",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2F4.jpg?alt=media&token=e95eec35-3df0-4f67-b5df-606cff4f5707",
    vice: { name: "Bart Simpson", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2Fbart.jpg?alt=media&token=a78b8cfc-4e1c-44e8-be01-8e2aa43b7baa" }
  },
  {
    number: 34,
    name: "Fred Flintstone",
    party: "Bedrock",
    image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2Ffred.jpg?alt=media&token=a0d21e90-1c4a-408c-8d92-ab7d0067bd59",
    vice: { name: "Barney Rubble", image: "https://firebasestorage.googleapis.com/v0/b/mbt-site-6cc8a.appspot.com/o/urna-iopoint%2Fbarney.jpg?alt=media&token=ef533446-c5c9-45b3-9eb5-00ef9e6c960b" }
  }
];
