let nosql = require("nosql").load("database.nosql");

// API List https://docs.totaljs.com/latest/en.html#api~Database
// Clears all documents from DB == nosql.clear()
// Cleans DB by removing of invalid documents == nosql.clean()

// nosql.clear();

// nosql.all(
      // function(token) {
        // return token.refresh_token == req.body.refresh_token;
		// console.log("Invalid client usi %s ", token );
      // },
      // function(err, tokens) {
        // if (tokens.length == 1) {
		// }
	  // }
// );

let view = nosql.view('access_token').fields('access_token');

console.log(" have a nice view %s ", view );

let update = nosql.update({ access_token: 'Jozef', client_id: 33 })
		.where('access_token', 'aaa');
	
console.log(" have a nice update %s ", update );
	
nosql.insert({
          access_token: "aaa",
          client_id: "clientId",
          scope: "cscope"
        });

nosql.find().make(function(filter) {
	// filter.where('age', '>', 20);
    // filter.where('removed', false);
    filter.callback(function(err, response) {
		if (err) console.log("err: ", err);
		console.log("response: ", response);
		
    });
});

lists = nosql.find()

console.log("lists: ", lists);

nosql.insert({ id: 3499, age: 55, name: 'Peter' }).callback(function(err) {
    console.log('The user has been created.');
});

nosql.update({ id: 3403, age: 60, name: 'Lucia' }).make(function(builder) {
    // builder.first(); --> updates only the one document
    builder.where('id', 3403);
    builder.callback(function(err, count) {
        console.log('updated documents:', count);
    });
});

nosql.modify({ age: 58 }).make(function(builder) {
    // builder.first(); --> modifies only the one document
    builder.where('id', 3403);
    builder.callback(function(err, count) {
        console.log('modified documents:', count);
    });
});

console.log(" have a nice day~" );

nosql.remove().make(function(builder) {
    // builder.first(); --> removes only the one document
    builder.where('age', '<', 15);
    builder.callback(function(err, count) {
        console.log('removed documents:', count);
    });
});		


