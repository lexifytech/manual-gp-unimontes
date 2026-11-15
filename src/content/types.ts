export type ContentMeta = {
  sourceFile?: string;
  sourceUrl?: string;
  lastVerified: string;
  mutable?: boolean;
};

export type Discipline = {
  name: string;
  theoretical: number;
  practical: number;
  weeklyClasses: number;
  hours: number;
  clockHours: number;
  note?: string;
};

export type CurriculumPeriod = {
  period: number;
  disciplines: Discipline[];
  subtotal?: { theoretical: number; practical: number };
};

export type AaccActivity = {
  code: string;
  activity: string;
  limit: string;
};

export type CampusPlace = {
  id: string;
  name: string;
  building?: string;
  hours?: string;
  phone?: string;
  email?: string;
  note?: string;
};

export type PathRow = {
  goal: string;
  startAt: string;
  question: string;
};

export type FacultyMember = {
  name: string;
  role?: string;
  email?: string;
  phone?: string;
  lattes?: string;
  bond?: string;
  location?: string;
  notes?: string;
  courseCoordination?: boolean;
};

export type OfficialSource = {
  label: string;
  href: string;
};

export type SearchDocument = {
  id: string;
  title: string;
  body: string;
  href: string;
};