class Github {
  constructor() {
    this.client_id = "352c7cd7aa02ac91bae1";
    this.client_secret = "c11e88db18246c4530da74a183c78b9016e2efeb";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile, //profile: profile
    };
  }
}
