export class Property {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public city: string,
    public state: string,
    public country: string,
    public image: string
  ) {}
}

export class Address {
  constructor(
    public city: string,
    public state: string,
    public country: string
  ) {}
}

export class NewProperty {
  constructor(
    public name: string,
    public description: string,
    public city: string,
    public state: string,
    public country: string,
    public image: string
  ) {}
}

export class UpdateProperty {
  constructor(
    public name?: string,
    public description?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public image?: string
  ) {}
}
