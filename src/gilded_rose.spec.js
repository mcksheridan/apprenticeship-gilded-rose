import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });
});

describe('Aged brie', () => {
  const brie = new Item('Aged Brie', 7, 2);
  const brieExpired = new Item('Aged Brie', -1, 10);
  const brieHighestQuality = new Item('Aged Brie', -1, 50);
  beforeAll(() => {
    updateQuality([brie, brieExpired, brieHighestQuality]);
  });
  it('Updates the quality of aged brie with a positive sell-in', () => {
    expect(brie.quality).toBe(3);
  });
  it('Updates the quality of aged brie with a negative sell-in', () => {
    expect(brieExpired.quality).toBe(12);
  });
  it('Shows the maximum quality of brie is 50', () => {
    expect(brieHighestQuality.quality).toBe(50);
  });
});

describe('Sulfuras', () => {
  const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
  updateQuality([sulfuras]);
  it('Shows that sulfuras always has a quality of 80', () => {
    expect(sulfuras.quality).toBe(80);
  });
});

describe('Backstage passes', () => {
  const pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10);
  const passTenDays = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8);
  const passFiveDays = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15);
  const passMaximumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50);
  const passPostConcert = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50);
  const passMinimumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);
  beforeAll(() => {
    updateQuality([pass, passTenDays, passFiveDays, passMaximumQuality,
      passPostConcert, passMinimumQuality]);
  });
  it('Updates the quality of a pass with more than 10 days before a show', () => {
    expect(pass.quality).toBe(11);
  });
  it('Updates the quality of a pass with 10 or fewer days before a show', () => {
    expect(passTenDays.quality).toBe(10);
  });
  it('Updates the quality of a pass with 5 or fewer days before a show', () => {
    expect(passFiveDays.quality).toBe(18);
  });
  it('Shows that the quality of a pass cannot exceed fifty', () => {
    expect(passMaximumQuality.quality).toBe(50);
  });
  it('Updates the quality of a pass for a show that has already happened', () => {
    expect(passPostConcert.quality).toBe(0);
  });
  it('Shows that the quality of a pass cannot decrease below zero', () => {
    expect(passMinimumQuality.quality).toBe(0);
  });
});

describe('Normal items', () => {
  const vest = new Item('+5 Dexterity Vest', 5, 10);
  const oldVest = new Item('+5 Dexterity Vest', -1, 5);
  const minimumQualityVest = new Item('+5 Dexterity Vest', -5, 0);
  const elixir = new Item('Elixir of the Mongoose', 3, 50);
  const oldElixir = new Item('Elixir of the Mongoose', 0, 28);
  const minimumQualityElixir = new Item('Elixir of the Mongoose', 0, 0);
  beforeAll(() => {
    updateQuality([vest, oldVest, minimumQualityVest, elixir, oldElixir, minimumQualityElixir]);
  });
  it('Updates the quality of a vest', () => {
    expect(vest.quality).toBe(9);
  });
  it('Updates the quality of a vest with a negative sell-in', () => {
    expect(oldVest.quality).toBe(3);
  });
  it('Shows that the quality of a vest cannot decrease below zero', () => {
    expect(minimumQualityVest.quality).toBe(0);
  });
  it('Updates the quality of elixir', () => {
    expect(elixir.quality).toBe(49);
  });
  it('Updates the quality of an elixir with a sell-in of zero', () => {
    expect(oldElixir.quality).toBe(26);
  });
  it('Shows that the quality of elixir cannot decrease below zero', () => {
    expect(minimumQualityElixir.quality).toBe(0);
  });
});

describe('Conjured items', () => {
  const cake = new Item('Conjured Mana Cake', 5, 10);
  const oldCake = new Item('Conjured Mana Cake', -1, 10);
  beforeAll(() => {
    updateQuality([cake, oldCake]);
  });
  it.skip('Updates the quality of conjured cake', () => {
    expect(cake.quality).toBe(8);
  });
  it.skip('Updates the quality of conjured cake with a negative sell-in', () => {
    expect(oldCake.quality).toBe(6);
  });
});
