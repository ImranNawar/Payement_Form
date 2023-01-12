class Github {
  constructor() {
    this.client_id = "352c7cd7aa02ac91bae1";
    this.client_secret = "c11e88db18246c4530da74a183c78b9016e2efeb";
    this.repos_count = 5;
    this.latest_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, //profile: profile
      repos,
    };
  }
}
