<div class="wrapper">
    <div class="first-content">
        <h5 class="company-name">Akspertise AS<h5>
        <h1>Aksel Kristoffersen</h1>
        <h5 class="title">Software Engineer</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur totam atque cum voluptas cumque beatae, porro natus. Commodi, repellendus?</p>
    </div>
    <div class="second-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque distinctio sequi asperiores nihil voluptatem non, harum perferendis exercitationem, vero quibusdam nemo. Quam enim delectus ut architecto? Maiores corrupti consequuntur ipsa cumque deleniti ab vel nemo ullam quibusdam? Animi nemo, quod hic unde vel corrupti non sunt consequatur esse aliquam ipsum aperiam amet ipsa labore, suscipit dolorum possimus facere repellendus laboriosam est corporis et accusantium? Cumque, voluptas. Esse dolore alias minus impedit, incidunt excepturi molestias fuga. Non facilis atque, exercitationem voluptatem odio sint. Tempore soluta in, perspiciatis, voluptas laudantium quas illo iusto officia aperiam consequuntur nostrum laborum qui dicta vero tempora. Ipsa cumque corrupti quia, accusantium et sint dicta quo assumenda! Voluptatibus omnis quod expedita totam, dolor, maiores, repellat perspiciatis eligendi officia dolore quos alias earum officiis? Error culpa praesentium laborum sed accusantium, sunt doloremque corrupti nisi ipsam placeat temporibus quasi quo rerum minima quaerat dicta ullam! Dolore deleniti vel cupiditate ducimus consectetur necessitatibus hic illo in? Ducimus eum vero consectetur, voluptates id inventore debitis cumque a. Suscipit recusandae animi asperiores repellendus voluptas eaque neque dignissimos, exercitationem sed doloribus blanditiis. Qui quasi ipsa accusantium tempora, error impedit quisquam sequi voluptatum ex quas expedita cupiditate perferendis ipsum, amet excepturi? Vitae, minus asperiores.</p>
    </div>
</div>

<style lang="scss">
    .wrapper {
        width: 100%;
        max-width: 1200px;
        padding: 30px 20px 30px;

        @include breakpoint.up('md') {
            padding: 40px 30px 30px;
        }
        @include breakpoint.up('lg') {
            display: flex;
            margin: auto;
        }
    }
    .first-content {
        width: 100%;
        @include breakpoint.up('lg') {
            padding: 40px 30px 30px;
            width: 50%;
        }
    }
    .second-content {
        width: 100%;
        @include breakpoint.up('lg') {
            padding: 40px 30px 30px;
            width: 50%;
        }
    }


    h1 {
        font-size: functions.toRem(30);
        line-height: 0.1;
        color: white;
        @include breakpoint.up('sm') {
            font-size: functions.toRem(34);
        }
        @include breakpoint.up('md') {
            font-size: functions.toRem(36);
        }
        @include breakpoint.up('lg') {
            font-size: functions.toRem(40);
        }
    }
    h5 {
        font-size: functions.toRem(18);
        @include breakpoint.up('sm') {
            font-size: functions.toRem(20);
        }
        @include breakpoint.up('md') {
            font-size: functions.toRem(21);
        }
        @include breakpoint.up('lg') {
            font-size: functions.toRem(24);
        }
    }
    .company-name {
        color: var(--semi-light-color);
        font-weight: 600;
    }
    .title {
        line-height: 2.7;
        color: var(--text-color);
        font-weight: 500;
    }
    p {
        color: var(--semi-light-color);
    }
</style>

