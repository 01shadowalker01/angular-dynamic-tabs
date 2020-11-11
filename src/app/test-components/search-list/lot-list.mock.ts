export const LOTS: Lot[] = [
  {
    title: "Lot title 1",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora.
      Id Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora.
      Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora.`,
    certification: "PSE 123567 (2019-09-19)",
    grade: "XF 90",
    estimate: 630,
    imageUrl: "assets/images/download.jpg",
    finished: false,
    area: "United States",
    subArea: "Civil War",
    lotClass: "Cover",
    scottNo: "C3a",
  },
  {
    title: "Lot title 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora. Id?`,
    certification: "PSE 123567 (2019-09-19)",
    grade: "XF 90",
    estimate: 630,
    imageUrl: "assets/images/imam_reza_stamp.jpg",
    finished: true,
    area: "United States",
    subArea: "Civil War",
    lotClass: "Cover",
    scottNo: "F3g",
  },
  {
    title: "Lot title 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora. Id?`,
    certification: "PSE 123567 (2019-09-19)",
    grade: "XF 90",
    estimate: 630,
    imageUrl: "assets/images/1919_stamp_of_Malta.jpg",
    finished: false,
    area: "United States",
    subArea: "Civil War",
    lotClass: "Cover",
    scottNo: "C3a",
  },
  {
    title: "Lot title 4",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora. Id?`,
    certification: "PSE 123567 (2019-09-19)",
    grade: "XF 90",
    estimate: 630,
    imageUrl: "",
    finished: false,
    area: "United States",
    subArea: "Civil War",
    lotClass: "Cover",
    scottNo: "F3g",
  },
  {
    title: "Lot title 5",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Tenetur fugit qui facere culpa numquam quia, odit, deleniti eveniet perspiciatis saepe blanditiis,
      excepturi quaerat cupiditate temporibus nisi amet vitae tempora. Id?`,
    certification: "PSE 123567 (2019-09-19)",
    grade: "XF 90",
    estimate: 630,
    imageUrl: "",
    finished: false,
    area: "United States",
    subArea: "Civil War",
    lotClass: "Cover",
    scottNo: "N2b",
  },
];

export class Lot {
  imageUrl: string;
  title: string;
  certification: string;
  grade: string;
  estimate: number;
  description: string;
  finished: boolean;
  area: string;
  subArea: string;
  lotClass: string;
  scottNo: string;
}
