# openapi_client.ArticlesApi

All URIs are relative to *https://api.example.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articles_get**](ArticlesApi.md#articles_get) | **GET** /articles | Get all articles
[**articles_id_delete**](ArticlesApi.md#articles_id_delete) | **DELETE** /articles/{id} | Delete article by ID
[**articles_id_get**](ArticlesApi.md#articles_id_get) | **GET** /articles/{id} | Get article by ID
[**articles_id_put**](ArticlesApi.md#articles_id_put) | **PUT** /articles/{id} | Update article by ID
[**articles_post**](ArticlesApi.md#articles_post) | **POST** /articles | Create a new article


# **articles_get**
> List[Article] articles_get()

Get all articles

### Example


```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)

    try:
        # Get all articles
        api_response = api_instance.articles_get()
        print("The response of ArticlesApi->articles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->articles_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Article]**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Articles retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articles_id_delete**
> articles_id_delete(id)

Delete article by ID

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 56 # int | 

    try:
        # Delete article by ID
        api_instance.articles_id_delete(id)
    except Exception as e:
        print("Exception when calling ArticlesApi->articles_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Article deleted successfully |  -  |
**404** | Article not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articles_id_get**
> Article articles_id_get(id)

Get article by ID

### Example


```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 56 # int | 

    try:
        # Get article by ID
        api_response = api_instance.articles_id_get(id)
        print("The response of ArticlesApi->articles_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->articles_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article found |  -  |
**404** | Article not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articles_id_put**
> Article articles_id_put(id, article_input)

Update article by ID

### Example


```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.models.article_input import ArticleInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    id = 56 # int | 
    article_input = openapi_client.ArticleInput() # ArticleInput | 

    try:
        # Update article by ID
        api_response = api_instance.articles_id_put(id, article_input)
        print("The response of ArticlesApi->articles_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->articles_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **article_input** | [**ArticleInput**](ArticleInput.md)|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article updated successfully |  -  |
**404** | Article not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **articles_post**
> Article articles_post(article_input)

Create a new article

### Example


```python
import openapi_client
from openapi_client.models.article import Article
from openapi_client.models.article_input import ArticleInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.example.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.example.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ArticlesApi(api_client)
    article_input = openapi_client.ArticleInput() # ArticleInput | 

    try:
        # Create a new article
        api_response = api_instance.articles_post(article_input)
        print("The response of ArticlesApi->articles_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArticlesApi->articles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **article_input** | [**ArticleInput**](ArticleInput.md)|  | 

### Return type

[**Article**](Article.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Article created successfully |  -  |
**400** | Invalid request body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

