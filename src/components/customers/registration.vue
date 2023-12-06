<template>
  <div class="registration">
    <div class="row justify-content-center">
      <div class="col-8">
        <form>
          <div class="form-group">
            <label for="fullname">Full name</label>
            <input type="text" class="form-control" id="fullname" aria-describedby="emailHelp" placeholder="Full name"/>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group col">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password"/>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="male" value="option1" checked>
              <label class="form-check-label" for="male">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="exampleRadios" id="female" value="option1">
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col">
              <label for="phone">Phone</label>
              <input type="tel" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Number Phone"/>
            </div>
            <div class="form-group col">
              <label for="address">address</label>
              <input type="text" class="form-control" id="address" placeholder="address"/>
            </div>
          </div>
          <div class="col-6 mx-auto mt-4"><button type="submit" class="btn btn-lg btn-info btn-block">Submit</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registration'
}
</script>

<style></style>
