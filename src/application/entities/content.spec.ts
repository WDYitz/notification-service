import { Content } from "./content";

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma notificação!');

    expect(content.value).toBeTruthy();
  })

  it('should not be able to create a notification content with less than 5 characters and more than 240', () => {
    const content = new Content('Você recebeu uma notificação!');

    expect(content.value.length).toBeGreaterThan(5);
    expect(content.value.length).toBeLessThan(240);
  })
})
