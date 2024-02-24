// 객체 리터럴 방법
      const emptyObject = {};

      emptyObject.name = 'Dong';
      emptyObject.age = 30;
      emptyObject.get_data = function () {
        return 1 + 2;
      };
      console.log(
        '[1] ',
        emptyObject.age,
        emptyObject.name,
        emptyObject.get_data()
      );

      /////////////////////////////////////////////

      const newUser = {
        age: 10,
        name: 'han',
        details: {
          hobby: 'codding',
          major: 'computer science',
          get_details: function (item) {
            return item + 2;
          },
          get_hobby: function () {
            return this.hobby;
          },
        },
      };
      console.log(
        '[2] ',
        newUser.age,
        newUser.name,
        newUser.details.get_details(2)
      );
      console.log('[2] ', newUser.details.hobby, newUser.details.get_hobby());

      //////////////////////////////////////////////

      const user = {
        age: 20,
        name: 'Oh',
        get_data: function () {
          return 1 + 2;
        },
      };

      console.log('[3] ', typeof user, user);
      console.log('[3] ', user.age);
      console.log('[3] ', user.name);
      console.log('[3] ', user.get_data());