import { phys01Fundamenty } from './phys01_fundamenty';
import { phys02Kinematyka } from './phys02_kinematyka';
import { phys03Dynamika } from './phys03_dynamika';
import { phys04BrylaSztywna } from './phys04_bryla_sztywna';
import { phys05Grawitacja } from './phys05_grawitacja';
import { phys06DrganiaFale } from './phys06_drgania_fale';
import { phys07Termodynamika } from './phys07_termodynamika';
import { phys08Elektrostatyka } from './phys08_elektrostatyka';
import { phys09PradStaly } from './phys09_prad_staly';
import { phys10Magnetyzm } from './phys10_magnetyzm';
import { phys11Optyka } from './phys11_optyka';
import { phys12Wspolczesna } from './phys12_wspolczesna';
import { phys13WzoryPozaKarta } from './phys13_wzory_poza_karta';
import { CKE_TASKS_1_6 } from './tasks/cke_tasks_1_6';
import { CKE_TASKS_7_12 } from './tasks/cke_tasks_7_12';
import { DEPARTMENT_EXAMS } from './exams/dept_exams';

const EXTRA_CKE_TASKS = {
  ...CKE_TASKS_1_6,
  ...CKE_TASKS_7_12,
};

const RAW_LEVELS = [
  phys01Fundamenty,
  phys02Kinematyka,
  phys03Dynamika,
  phys04BrylaSztywna,
  phys05Grawitacja,
  phys06DrganiaFale,
  phys07Termodynamika,
  phys08Elektrostatyka,
  phys09PradStaly,
  phys10Magnetyzm,
  phys11Optyka,
  phys12Wspolczesna,
  phys13WzoryPozaKarta,
];

export const FIZYKA_LEVELS = RAW_LEVELS.map((dept) => ({
  ...dept,
  examTasks: [...(dept.examTasks || []), ...(EXTRA_CKE_TASKS[dept.id] || [])],
  exam: DEPARTMENT_EXAMS[dept.id] || null,
}));
