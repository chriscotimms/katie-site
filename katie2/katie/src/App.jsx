import Accordion from "./components/Accordion";

export default function App() {
  const items = [
    {
      title: "Selected Work",
      links: [
        { text: "cooperation, economy, industry [2021]", url: "https://www.google.com" },
        { text: "as it got dark it got heavier [2019]", url: "https://www.youtube.com" },
        { text: "a shorthand for violence [2017]", url: "https://www.youtube.com" },
        { text: "some of the parts [2017]", url: "https://www.youtube.com" },
        { text: "The Edge of the Frame [2016]", url: "https://www.youtube.com" },
        { text: "Wrong then, wrong today [2016]", url: "https://www.youtube.com" },
        { text: "2011-12 (Prosopagnosia) [2016]", url: "https://www.youtube.com" },
        { text: "I was talking metaphorically [2016]", url: "https://www.youtube.com" },
        { text: "Skip [2015]", url: "https://www.youtube.com" },
        { text: "DRIFT/JOY [2015]", url: "https://www.youtube.com" },
        { text: "The Girl In The W13 T-shirt [2015]", url: "https://www.youtube.com" },
        { text: "My Old Man's A Dustman [2014]", url: "https://www.youtube.com" },
        { text: "coming from inside the house 2 [2013]", url: "https://www.youtube.com" },
        { text: "Hard times come and hard times go... [2013]", url: "https://www.youtube.com" },
        { text: "Shall we sing a song for you? [2012]", url: "https://www.youtube.com" },
        { text: "Calculated [2011]", url: "https://www.youtube.com" }
      ],
    },
    {
      title: "Collaborations",
      links: [
        { text: "GitHub", url: "https://github.com" },
        { text: "Stack Overflow", url: "https://stackoverflow.com" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "React Docs", url: "https://react.dev" },
        { text: "MDN Web Docs", url: "https://developer.mozilla.org" },
      ],
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}


