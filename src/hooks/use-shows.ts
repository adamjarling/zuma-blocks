type Show = {
  date: string;
  [key: string]: string | number;
};

export default function useShows(shows: Array<Show>) {
  const payload = {
    currentShows: [],
    pastShows: [],
    sorted: [],
  };
  const currentShows: Show[] = [];
  const pastShows: Show[] = [];

  if (!shows || shows.length === 0) return payload;

  const sorted = shows.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    return aDate < bDate ? -1 : aDate === bDate ? 0 : 1;
  });

  sorted.forEach((show) => {
    const showDate = new Date(show.date);
    const now = new Date();
    if (showDate >= now) {
      currentShows.push(show);
    } else {
      pastShows.push(show);
    }
  });

  return {
    currentShows,
    pastShows,
    sorted,
  };
}
