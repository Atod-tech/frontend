"use client";
export class StoreService {
  // useful for future data store swapping;
  // currently using local storage,
  // might see a need to swap for cookie sometime later

  static getObject = (name: string): any => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(name) ?? "{}");
    }
  };

  static getItem = (name: string): any => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(name);
    }
  };
  static setItem = (name: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        name,
        typeof value === "string" ? value : JSON.stringify(value)
      );
    }
  };
  static removeItem = (name: string) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(name);
    }
  };
}
