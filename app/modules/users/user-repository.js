const Repository = container.repository;

/**
 * User repo
 */
class UserRepository extends Repository {
  /**
   * Init new object
   *
   * @param   {object}  userModel
   *
   * @return  {void}
   */
  constructor(userModel) {
    super(userModel);
  }
}

module.exports = UserRepository;
