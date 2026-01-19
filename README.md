# Indiansummeradmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## backend server

This app is using a spring boot backend server with  mongodb .
The repository resource layer is using 

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
@RepositoryRestResource(path = "artist")

for making its standard crud style resful calls.
Also using using standard DAO controller/service impl layer as well

The artistService calls from the app to 
monoFindByArtistId
monoComboFindByArtistId

are invoking the Java React libraries on the back end to make async calls and to aggregate two calls 
for combined data results. code below:


import reactor.core.publisher.Mono;
.....

 @RequestMapping(value = "/monoFindByArtistId/", method = RequestMethod.GET)
 public Mono<ie.indiansummer.model.Artist> monoFindById(@RequestParam("ID") String id) {

        final Mono<ie.indiansummer.model.Artist> artistList = vinylRecordService.getArtistByIdMono(id);

        return artistList;
    }

    @RequestMapping(value = "/monoComboFindByArtistId/", method = RequestMethod.GET)
    public Mono<ie.indiansummer.model.RelatedArtist> monoComboFindById(@RequestParam("ID") String id) {

        final Mono<ie.indiansummer.model.Artist> artist = vinylRecordService.getArtistByIdMono(id);

        final Mono<ie.indiansummer.model.Artist>  relatedartist= vinylRecordService.getArtistByIdMono("62a087246291180ad27f866b");

        //here tuple will contain combined response of 2 Mono's which you have passed
        //in zip method
        // tuple.getT1() will give you response of MonoA (first call)
        // tuple.getT2() will give you response of MonoB (second call)
        // you can create new object with response of above 2.

        return Mono.zip(artist, relatedartist)
                .map(tuple -> fetchMoreDataAsMono(tuple.getT1(), tuple.getT2()));

    }

    private RelatedArtist fetchMoreDataAsMono (Artist art1, Artist art2) {

        RelatedArtist combinedArtist =  new RelatedArtist();


        combinedArtist.setHistory(art1.getHistory());
        combinedArtist.setMenuimage(art1.getMenuimage());
        combinedArtist.setDisplay(true);
        combinedArtist.setId(art1.getId());
        combinedArtist.setName(art1.getName());

        combinedArtist.setRelatedName(art2.getName());
        combinedArtist.setRelatedHistory(art2.getHistory());
        combinedArtist.setRelatedMenuimage(art2.getMenuimage());

        return combinedArtist;
    }

    import reactor.core.publisher.Mono;
    import org.springframework.web.reactive.function.client.WebClient;
    
    
    public Mono<Artist> getArtistByIdMono(String id){
    
            return webClient.get()
                    .uri("/artist/{id}", id)
                    .retrieve()
                    .bodyToMono(Artist.class);
    
        }



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
