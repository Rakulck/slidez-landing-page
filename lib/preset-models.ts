import type { Gender } from "@/lib/slidezCallableFunctions";

export interface PresetModel {
  id: string;
  src: string;
  label: string;
  gender: Gender;
}

export const PRESET_MODELS: PresetModel[] = [
  { id: "indian-woman",       src: "/models/indian-woman.png",       label: "Indian Woman",   gender: "Women" },
  { id: "latina-woman",       src: "/models/latina-woman.png",       label: "Latina Woman",   gender: "Women" },
  { id: "black-woman",        src: "/models/black-woman.png",        label: "Black Woman",    gender: "Women" },
  { id: "blonde-woman",       src: "/models/blonde-woman.png",       label: "Blonde Woman",   gender: "Women" },
  { id: "brunette-woman",     src: "/models/brunette-woman.png",     label: "Brunette Woman", gender: "Women" },
  { id: "arab-woman-hijab",   src: "/models/arab-woman-hijab.png",   label: "Arab (Hijab)",   gender: "Women" },
  { id: "arab-woman",         src: "/models/arab-woman.png",         label: "Arab Woman",     gender: "Women" },
  { id: "chinese-woman",      src: "/models/chinese-woman.png",      label: "Chinese Woman",  gender: "Women" },
  { id: "mexican-man",        src: "/models/mexican-man.png",        label: "Mexican Man",    gender: "Men"   },
  { id: "arab-man",           src: "/models/arab-man.png",           label: "Arab Man",       gender: "Men"   },
  { id: "black-man",          src: "/models/black-man.png",          label: "Black Man",      gender: "Men"   },
  { id: "blonde-white-man",   src: "/models/blonde-white-man.png",   label: "Blonde Man",     gender: "Men"   },
  { id: "brunette-white-man", src: "/models/brunette-white-man.png", label: "Brunette Man",   gender: "Men"   },
  { id: "chinese-man",        src: "/models/chinese-man.png",        label: "Chinese Man",    gender: "Men"   },
  { id: "indian-man",         src: "/models/indian-man.png",         label: "Indian Man",     gender: "Men"   },
];

export const DEFAULT_MODEL = PRESET_MODELS[0];
