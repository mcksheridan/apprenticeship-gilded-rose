import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('Updates the quality of aged brie', () => {
    const brie = new Item('Aged Brie', 7, 2);
    const brieExpired = new Item('Aged Brie', -1, 10);
    const brieHighestQuality = new Item('Aged Brie', -1, 50);
    updateQuality([brie, brieExpired, brieHighestQuality]);
    expect(brie.quality).toBe(3);
    expect(brieExpired.quality).toBe(12);
    expect(brieHighestQuality.quality).toBe(50);
  });

  it('Updates the quality of sulfuras', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    updateQuality([sulfuras]);
    expect(sulfuras.quality).toBe(80);
  });

  it('Updates the quality of backstage passes', () => {
    const pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10);
    const passTenDays = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8);
    const passFiveDays = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15);
    const passMaximumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50);
    const passPostConcert = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50);
    const passMinimumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);
    updateQuality([pass, passTenDays, passFiveDays, passMaximumQuality,
      passPostConcert, passMinimumQuality]);
    expect(pass.quality).toBe(11);
    expect(passTenDays.quality).toBe(10);
    expect(passFiveDays.quality).toBe(18);
    expect(passMaximumQuality.quality).toBe(50);
    expect(passPostConcert.quality).toBe(0);
    expect(passMinimumQuality.quality).toBe(0);
  });

  it('Updates the quality of normal items', () => {
    const vest = new Item('+5 Dexterity Vest', 5, 10);
    const oldVest = new Item('+5 Dexterity Vest', -1, 5);
    const minimumQualityVest = new Item('+5 Dexterity Vest', -5, 0);
    const elixir = new Item('Elixir of the Mongoose', 3, 50);
    const oldElixir = new Item('Elixir of the Mongoose', 0, 28);
    const minimumQualityElixir = new Item('Elixir of the Mongoose', 0, 0);
    updateQuality([vest, oldVest, minimumQualityVest, elixir, oldElixir, minimumQualityElixir]);
    expect(vest.quality).toBe(9);
    expect(oldVest.quality).toBe(3);
    expect(minimumQualityVest.quality).toBe(0);
    expect(elixir.quality).toBe(49);
    expect(oldElixir.quality).toBe(26);
    expect(minimumQualityElixir.quality).toBe(0);
  });

  it.skip('Updates the quality of conjured items', () => {
    const cake = new Item('Conjured Mana Cake', 5, 10);
    const oldCake = new Item('Conjured Mana Cake', -1, 10);
    updateQuality([cake, oldCake]);
    expect(cake.quality).toBe(8);
    expect(oldCake.quality).toBe(6);
  });
});
